import { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import CategoryProduct from "../Home/HomeCategory/CategoryProduct";
import FiltersSidebar from "./FiltersSidebar";
import PaginationButtons from "./PaginationButtons";
import Path from "./Path";
import { capitalize } from "../Helpers/Helpers";
const PRODUCTS_NUMBER = 9;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 1000 });
  const [size, setSize] = useState([]);
  const [filterOptions, setFilterOptions] = useState({ price, size });
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const category = useParams();

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products${
        category.category ? `/category/${category.category}` : ""
      }`
    )
      .then((response) => response.json())
      .then((newProducts) =>
        setProducts(
          newProducts.map((product) => {
            return {
              ...product,
              size: ["small", "medium", "big"][Math.floor(Math.random() * 3)], // add random size to the product list for demonstration purposes
            };
          })
        )
      )
      .catch((error) => console.error(error));
  }, [category]);
  const productsList = (products) => {
    return useMemo(
      () =>
        products
          .filter((product) => {
            if (
              product.price >= filterOptions.price.min &&
              product.price <= filterOptions.price.max &&
              (filterOptions.size.length === 0 ||
                filterOptions.size.includes(product.size))
            ) {
              return product;
            }
            return false;
          })
          .map((product, index) => {
            const startIndex = (activePage - 1) * PRODUCTS_NUMBER;
            const endIndex = activePage * PRODUCTS_NUMBER;
            if (index + 1 > startIndex && index < endIndex) {
              return <Link to={`${category.category}/${product.id}`}><CategoryProduct key={product.id} {...product} /></Link>;
            }
          }),
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
  };
  const handleSortClick = () => {
    setIsSortOpen((isSortOpen) => !isSortOpen);
  };

  const handleSortMode = (sortFn) => {
    setProducts((products) => products.toSorted(sortFn));
    setIsSortOpen(false);
  };

  return (
    <main className="products-page">
      <Path />
      <div className="container products-container-grid">
        <FiltersSidebar
          {...{
            handleSizeClick,
            handleFilterClick,
            isSizeActive,
            isFilterOpen,
            handlePriceEnter,
            price,
            setPrice
          }}
        />
        <div className="products-container">
          <div className="products-heading">
            <h1 className="title">
              {category.category && capitalize(category.category)}
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
          {products && <PaginationButtons {...{activePage, setActivePage, products, PRODUCTS_NUMBER}} />}
        </div>
      </div>
    </main>
  );
};

export default Products;
