import Path from "./Path";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Product = () => {
  const [productDetails, setProductDetails] = useState({});
  const params = useParams();
  console.log(params.category);
  console.log(params.id);
  //   useEffect(() => {
  //     fetch(`https://fakestoreapi.com/products/${params.id}`)
  //     .then(response => response.json())
  //     .then(data => setProductDetails(data))
  //     .catch(error => console.error(error));
  //   }, [])
  return (
    <main>
      <Path />
      <div className="product-container">
        <div className="gallery">
          <img src="" alt="" />
          <div className="gallery-thumbnails"></div>
        </div>
        <div className="product-info">
          <div className="product-description"></div>
          <ul className="select-size-container"></ul>
          <div className="add-cart"></div>
        </div>
      </div>
    </main>
  );
};

export default Product;
