import { useEffect, useState, useMemo } from "react";
import CategoryProduct from "../Home/HomeCategory/CategoryProduct";
import RangeSlider from "react-range-slider-input";
import ButtonSize from "../Misc/ButtonSize";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 1000 });
  const [size, setSize] = useState([]);
  const [filterOptions, setFilterOptions] = useState({ price, size });
  const [isSortOpen, setIsSortOpen] = useState(false);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=9`)
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
      );
  }, []);
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
            return null;
          })
          .map((product) => {
            return <CategoryProduct key={product.id} {...product} />;
          }),
      [products, filterOptions]
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
  };
  const handleSortClick = (event) => {
    if (event.currentTarget.value !== event.target.value) {
      setIsSortOpen(false);
    }
    setIsSortOpen((isSortOpen) => !isSortOpen);
  };
  const handleSortMode = (sortFn) => {
    setProducts((products) => products.toSorted(sortFn));
    setIsSortOpen(false);
  };
  return (
    <main className="">
      <div className="container products-container-grid">
        <div className="filters-container">
          <div className="filters-heading">
            <h2>Filters</h2>
            <button
              disabled
              aria-label="filter-disabled"
              className="btn-search btn-uninteractive"
            >
              <img src="/filterIconDisabled.png" alt="" />
            </button>
          </div>
          <div>
            <ul className="filter-categories">
              <li>Jewelery</li>
              <li>Men's clothing</li>
              <li>Women's clothing</li>
              <li>Electronics</li>
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
                autocomplete="off"
                onChange={(e) => handlePriceEnter(e.target.value, price.max)}
                inputmode="numeric"
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
                autocomplete="off"
                onChange={(e) => handlePriceEnter(price.min, e.target.value)}
                inputmode="numeric"
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
            <h1>Casual</h1>
            <div className="products-sort">
              <p>showing 1-10 of 100 products</p>
              <div
                className="dropdown-sort-container"
                onBlur={(e) =>
                  !e.currentTarget.contains(e.relatedTarget) &&
                  setIsSortOpen(false)
                }
              >
                <button onClick={handleSortClick} className="btn-dropdown-sort">
                  Sort By
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
          <div className="pages-list"></div>
        </div>
      </div>
    </main>
  );
};

export default Products;
