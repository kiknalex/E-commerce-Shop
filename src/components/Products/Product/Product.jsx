import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Path from "../Path";
import Gallery from "./Gallery";
import ProductDescription from "./ProductDescription";

const Product = () => {
  const [productDetails, setProductDetails] = useState({});
  const params = useParams();
  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data))
      .catch((error) => console.error(error));
  }, [params.id]);

  return (
    <main className="">
      <Path />
      <div className="product-container container">
        {productDetails.image && <Gallery  images={[productDetails.image,"https://picsum.photos/id/21/600/900", "https://picsum.photos/id/1/600/900"]} />}
        <ProductDescription details={productDetails} />
      </div>
    </main>
  );
};

export default Product;
