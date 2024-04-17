import { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import CategoryProduct from "../Home/HomeCategory/CategoryProduct";
import RangeSlider from "react-range-slider-input";
import ButtonSize from "../Misc/ButtonSize";
import Path from "./Path";
import { capitalize } from "../Helpers/Helpers";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 1000 });
  const [size, setSize] = useState([]);
  const [filterOptions, setFilterOptions] = useState({ price, size });
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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
              size: ["small", "medium", "big"][Math.floor(Math.random() * 3)], // add fake size to the product list for demonstration purposes
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
            const startIndex = (activePage - 1) * 9;
            const endIndex = activePage * 9;
            if (index + 1 > startIndex && index < endIndex) {
              return <CategoryProduct key={product.id} {...product} />;
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
    <main id="products-page" className="products-page">
      <Path />
      <div className="container products-container-grid">
        <div
          onTouchStart={() => setIsFilterOpen(false)}
          onClick={() => setIsFilterOpen(false)}
          className={`outside-hamburger-click-close ${
            isFilterOpen ? "opened" : ""
          }`}
        ></div>
        <div className={`filters-container ${isFilterOpen ? "opened" : ""}`}>
          <div className="filters-heading">
            <h2>Filters</h2>
            <button aria-label="close filter" className="btn-modal-close" onClick={() => setIsFilterOpen(false)}>
              <i className="fa-solid fa-xmark fa-2xl"></i>
            </button>
          </div>
          <div>
            <ul className="filter-categories">
              <li>
                <Link to="/products">All</Link>
              </li>
              <li>
                <Link to="jewelery">Jewelery</Link>
              </li>
              <li>
                <Link to="men's clothing">Men's clothing</Link>
              </li>
              <li>
                <Link to="women's clothing">Women's clothing</Link>
              </li>
              <li>
                <Link to="electronics">Electronics</Link>
              </li>
            </ul>
          </div>
          <div className="filter-price">
            <RangeSlider
              className="slider"
              min={0}
              max={1000}
              step={50}
              rangeSlideDisabled
              value={[price.min, price.max]}
              onInput={(value) => setPrice({ min: value[0], max: value[1] })}
            />
            <div className="filter-price-num">
              <label htmlFor="min-price-input" className="sr-only">
                Enter Minimum Price
              </label>
              <input
                type="text"
                value={price.min}
                autoComplete="off"
                onChange={(e) => handlePriceEnter(e.target.value, price.max)}
                inputMode="numeric"
                className="filter-price-num-input"
                maxLength={9}
                placeholder="0"
                id="min-price-input"
              />
              <label htmlFor="max-price-input" className="sr-only">
                Enter Maximum Price
              </label>
              <input
                type="text"
                value={price.max}
                autoComplete="off"
                onChange={(e) => handlePriceEnter(price.min, e.target.value)}
                inputMode="numeric"
                className="filter-price-num-input"
                maxLength={9}
                id="max-price-input"
              />
            </div>
          </div>
          <div className="filter-sizes">
            <h3>Size</h3>
            <ul className="sizes-list">
              <li>
                <ButtonSize
                  className={`btn-size text--gray ${isSizeActive("small")}`}
                  onClick={() => handleSizeClick("small")}
                >
                  Small
                </ButtonSize>
              </li>
              <li>
                <ButtonSize
                  className={`btn-size text--gray ${isSizeActive("medium")}`}
                  onClick={() => handleSizeClick("medium")}
                >
                  Medium
                </ButtonSize>
              </li>
              <li>
                <ButtonSize
                  className={`btn-size text--gray ${isSizeActive("big")}`}
                  onClick={() => handleSizeClick("big")}
                >
                  Big
                </ButtonSize>
              </li>
            </ul>
          </div>
          <button
            className="btn-pill btn-black filter-apply"
            onClick={handleFilterClick}
          >
            Apply Filter
          </button>
        </div>
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
                Showing {9 * (activePage - 1)}-{9 * activePage} of{" "}
                {products.length} products
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
                  <i class="fa-solid fa-chevron-down"></i>
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
          <div className="pages-list-container">
            <button
              disabled={activePage === 1}
              className="change-page"
              onClick={() => setActivePage((prevPage) => prevPage - 1)}
            >
              <span>
                <i
                  className="fa-solid fa-arrow-left fa-lg arrow"
                  onClick={() => handlePageChange("minus")}
                ></i>
              </span>{" "}
              Previous
            </button>
            <ol className="pages-list">
              {products.map((product, index, array) => {
                if ((index + 1) % 9 === 0) {
                  return (
                    <li key={index}>
                      <button
                        className={`page-number ${
                          activePage === (index + 1) / 9
                            ? "page-number-active"
                            : ""
                        }`}
                        onClick={() => setActivePage((index + 1) / 9)}
                      >
                        {(index + 1) / 9}
                      </button>
                    </li>
                  );
                } else if (index + 1 === array.length) {
                  return (
                    <li key={index}>
                      <button
                        className={`page-number ${
                          activePage === Math.ceil((index + 1) / 9)
                            ? "page-number-active"
                            : ""
                        }`}
                        onClick={() =>
                          setActivePage(Math.ceil((index + 1) / 9))
                        }
                      >
                        {Math.ceil(array.length / 9)}
                      </button>
                    </li>
                  );
                }
                return null;
              })}
            </ol>
            <button
              disabled={activePage === Math.ceil(products.length / 9)}
              className="change-page"
              onClick={() => setActivePage((prevPage) => prevPage + 1)}
            >
              Next{" "}
              <span>
                <i className="fa-solid fa-arrow-right fa-lg arrow"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
