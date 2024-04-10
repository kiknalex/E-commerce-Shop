import { useEffect, useState, useMemo } from "react";
import CategoryProduct from "../Home/HomeCategory/CategoryProduct";
import RangeSlider from "react-range-slider-input";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState({ min: 0, max: 1000 });
  const [filterOptions, setFilterOptions] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=9`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  const productsList = (products) => {
    return useMemo(
      () =>
        products.map((product) => (
          <CategoryProduct key={product.id} {...product} />
        )),
      [products, filterOptions]
    );
  };

  const onPriceEnter = (min, max) => {
    if(min > 1000 || max > 1000) {
      return null;
    }
    setPrice({min, max});
  }
  
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
              <input type="text" value={price.min} onChange={e => onPriceEnter(e.target.value, price.max)} inputmode="numeric" className="filter-price-num-input" />
              <input type="text" value={price.max} onChange={e => onPriceEnter(price.min, e.target.value)} inputmode="numeric" className="filter-price-num-input"/>
            </div>
          </div>
          <div className="filter-color">
            <h3>Colors</h3>
            <ul>
              <li>
                <i></i>
              </li>
              <li>
                <i></i>
              </li>
              <li>
                <i></i>
              </li>
              <li>
                <i></i>
              </li>
              <li>
                <i></i>
              </li>
              <li>
                <i></i>
              </li>
              <li>
                <i></i>
              </li>
              <li>
                <i></i>
              </li>
            </ul>
          </div>
          <div className="filter-color">
            <h3>Size</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <button>Apply Filter</button>
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
