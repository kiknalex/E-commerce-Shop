import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Path from "../Path";
import Gallery from "./Gallery";
import ProductDescription from "./ProductDescription";
import ProductInfoTabs from "./ProductInfoTabs";
import HomeCategory from "../../Home/HomeCategory/HomeCategory";
const Product = ({addToCart}) => {
  const [productDetails, setProductDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data))
      .catch((error) => console.error(error));
  }, [params.id]);
  return (
    <>
      <Path />
      <main id="main-content" className="product-page container">
        <div className="product-container">
          {productDetails.image && (
            <Gallery
              mainImage={productDetails.image}
              images={[
                productDetails.image, // using random images because test api provides only 1
                "https://picsum.photos/id/21/600/900",
                "https://picsum.photos/id/1/600/900",
              ]}
            />
          )}
          <ProductDescription details={productDetails} addToCart={addToCart} />
        </div>
        <ProductInfoTabs details={productDetails} />
        <HomeCategory title="You might also like" category={params.category} />
      </main>
    </>
  );
};

export default Product;
