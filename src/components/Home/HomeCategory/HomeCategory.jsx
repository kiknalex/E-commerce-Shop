import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
const HomeCategory = ({ title, category }) => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=4`)
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);
  return (
    <div className="container home-category">
      <h2 className="category-heading title">{title}</h2>
      <div className="grid-category-squares">
        {productList.map((product) => {
          return <CategoryProduct key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="btn-pill btn-white btn-intro">View All</Link>
    </div>
  );
};

export default HomeCategory;
