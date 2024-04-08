import { useEffect, useState, useMemo } from "react";
import CategoryProduct from "../Home/HomeCategory/CategoryProduct";
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
              <li>jewelery</li>
              <li>Men's clothing</li>
              <li>Women's clothing</li>
              <li>Electronics</li>
            </ul>
          </div>
          <div className="filter-price">
            <input
              type="number"
              className="range-min"
              min="0"
              max="10000"
              value={price.min}
              onChange={(e) =>
                setPrice((price) => ({ ...price, min: e.target.value }))
              }
            />
            <input
              type="number"
              className="range-max"
              min="0"
              max="10000"
              value={price.max}
              onChange={(e) =>
                setPrice((price) => ({ ...price, max: e.target.value }))
              }
            />
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
