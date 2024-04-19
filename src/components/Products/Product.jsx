import Path from "./Path";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Product = () => {
  const [productDetails, setProductDetails] = useState({});
  const params = useParams();
  console.log(params.category);
  console.log(params.id);
  useEffect(() => {
    fetch(`fetch('https://fakestoreapi.com/products/${params.id}')`)
  }, [])
  return (
    <main>
      <Path />
      <div className="product-container"></div>
    </main>
  );
};

export default Product;
