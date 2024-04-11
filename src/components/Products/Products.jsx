import { useEffect, useState, useMemo } from "react";
import CategoryProduct from "../Home/HomeCategory/CategoryProduct";
import RangeSlider from "react-range-slider-input";
import ButtonSize from "../Misc/ButtonSize";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 1000 });
  const [size, setSize] = useState([]);
  const [filterOptions, setFilterOptions] = useState({ price, size });

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
      return null;
    }
    setPrice({ min, max });
  };

  const handleSizeClick = (newSize) => {
    console.log(size);
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
    console.log(products);
  };

  return (
    <main className="">
      <div className="container products-container-grid">
        <div className="filters-container">
          <div className="filters-heading">
            <h2>Filters</h2>
            <i>filter icon</i>
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
              <input
                type="text"
                value={price.min}
                onChange={(e) => handlePriceEnter(e.target.value, price.max)}
                inputmode="numeric"
                className="filter-price-num-input"
              />
              <input
                type="text"
                value={price.max}
                onChange={(e) => handlePriceEnter(price.min, e.target.value)}
                inputmode="numeric"
                className="filter-price-num-input"
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
            <div>
              <p>showing 1-10 of 100 products</p>
              <p>sort by</p>
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
