import { useEffect, useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import CategoryProduct from "../Home/HomeCategory/CategoryProduct";
import FiltersSidebar from "./FiltersSidebar";
import PaginationButtons from "./PaginationButtons";
import Path from "./Path";
import { capitalize } from "../Helpers/Helpers";
const PRODUCTS_NUMBER = 9;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 1000 }); //refactor
  const [size, setSize] = useState([]);
  const [filterOptions, setFilterOptions] = useState({ price, size });
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products${
        params.category ? `/category/${params.category}` : ""
      }`
    )
      .then((response) => response.json())
      .then((newProducts) => {
        if (newProducts.length < 1) {
          throw new Error("Data is empty.");
        }
        setProducts(
          newProducts.map((product) => {
            return {
              ...product,
              size: ["small", "medium", "big"][Math.floor(Math.random() * 3)], // add random size to the product list for demonstration purposes
            };
          })
        );
      })
      .catch((error) => {
        console.error(error);
        navigate("/products");
      });
  }, [params]);

  useEffect(() => {
    if (isFilterOpen) {
      document.body.classList.add("body-noscroll");
    } else {
      document.body.classList.remove("body-noscroll");
    }
    return () => {
      document.body.classList.remove("body-noscroll"); // Clean up on unmount
    };
  }, [isFilterOpen]);

  const productsFilterFn = (product) => {
    if (
      product.price >= filterOptions.price.min &&
      product.price <= filterOptions.price.max &&
      (filterOptions.size.length === 0 ||
        filterOptions.size.includes(product.size))
    ) {
      return product;
    }
    return false;
  };
  const productsList = (products) => {
    const startIndex = (activePage - 1) * PRODUCTS_NUMBER;
    const endIndex = activePage * PRODUCTS_NUMBER;
    return useMemo(
      () =>
        products
          .filter(productsFilterFn)
          .slice(startIndex, endIndex)
          .map((product) => <CategoryProduct key={product.id} {...product} />),

      [products, filterOptions, activePage]
    );
  };

  const handlePriceEnter = (min, max) => {
    if (min > 1000 || max > 1000) {
      setPrice({ min: 950, max: 1000 });
      return null;
    }
    if (min >= max) {
      return null;
    }
    setPrice({ min, max });
  };

  const handleSizeClick = (newSize) => {
    if (size.includes(newSize)) {
      setSize(size.filter((size) => size !== newSize));
    } else {
      setSize([...size, newSize]);
    }
  };
  const isSizeActive = (currentSize) => {
    if (size.includes(currentSize.toLowerCase())) {
      return "size-active";
    } else return "";
  };
  const handleFilterClick = () => {
    setFilterOptions({
      price: { ...price },
      size: [...size],
    });
    setIsFilterOpen(false);
    setActivePage(1);
  };
  const handleSortClick = () => {
    setIsSortOpen((isSortOpen) => !isSortOpen);
  };

  const handleSortMode = (sortFn) => {
    setProducts((products) => products.toSorted(sortFn));
    setIsSortOpen(false);
  };

  return (
    <main id="main-content" className="products-page">
      <Path
        path={[
          {
            route: params.category ?? "All",
            link: `/products/${params.category ?? "All"}`,
          },
        ]}
      />
      <div className="container products-container-grid">
        <FiltersSidebar
          {...{
            handleSizeClick,
            handleFilterClick,
            isSizeActive,
            isFilterOpen,
            handlePriceEnter,
            price,
            setPrice,
            setIsFilterOpen,
          }}
        />
        <div className="products-container">
          <div className="products-heading">
            <h1 className="title">
              {params.category && capitalize(params.category)}
            </h1>
            <div className="products-sort">
              <button
                onClick={() => setIsFilterOpen((prevState) => !prevState)}
                aria-label="open filters"
                className="btn-search btn-filters-mobile"
              >
                <img
                  src="/filterIconEnabled.png"
                  width="32"
                  height="32"
                  alt=""
                />
              </button>
              <p className="text--sm text--gray products-number">
                Showing {PRODUCTS_NUMBER * (activePage - 1)}-
                {PRODUCTS_NUMBER * activePage} of {products.length} products
              </p>
              <div
                className="dropdown-sort-container"
                onBlur={(e) =>
                  !e.currentTarget.contains(e.relatedTarget) &&
                  setIsSortOpen(false)
                }
              >
                <button onClick={handleSortClick} className="btn-dropdown-sort">
                  Sort By
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
                <div className={`dropdown-sort ${isSortOpen ? "open" : ""}`}>
                  <ul className="dropdown-sort-list">
                    <li>
                      <button
                        className="btn-dropdown-sort"
                        onClick={() =>
                          handleSortMode((a, b) => a.price - b.price)
                        }
                      >
                        Lowest Price
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-dropdown-sort"
                        onClick={() =>
                          handleSortMode((a, b) => b.price - a.price)
                        }
                      >
                        Highest Price
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="products-list">
            {products && productsList(products)}
          </div>
          {products && (
            <PaginationButtons
              {...{
                activePage,
                setActivePage,
                products,
                PRODUCTS_NUMBER,
                productsFilterFn,
              }}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Products;
