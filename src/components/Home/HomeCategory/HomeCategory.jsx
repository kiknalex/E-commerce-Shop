import { useEffect, useState } from "react";
import CategoryProduct from "./CategoryProduct";
const HomeCategory = ({ title, category }) => {
    console.log(category);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=4`)
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);
  return (
    <div className=" home-category">
      <h2 className="category-heading title">{title}</h2>
      <div className="grid-category-squares">
        {productList.map((product) => {
          return <CategoryProduct key={product.id} {...product} />;
        })}
      </div>
      <a className="btn-pill btn-white">View All</a>
    </div>
  );
};

export default HomeCategory;
