import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Path from "../Path";
import Gallery from "./Gallery";
import ProductDescription from "./ProductDescription";
import ProductInfoTabs from "./ProductInfoTabs";
import HomeCategory from "../../Home/HomeCategory/HomeCategory";
const Product = () => {
  const [productDetails, setProductDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data))
      .catch((error) => console.error(error));
  }, [params.id]);
  // using random images because test api provides only 1
  return (
    <>
      <main className="product-page container">
        <Path />
        <div className="product-container container">
          {productDetails.image && (
            <Gallery
              mainImage={productDetails.image}
              images={[
                productDetails.image,
                "https://picsum.photos/id/21/600/900",
                "https://picsum.photos/id/1/600/900",
              ]}
            />
          )}
          <ProductDescription details={productDetails} />
        </div>
        <ProductInfoTabs details={productDetails} />
        <HomeCategory title="You might also like" category={"jewelery"} />
      </main>

      
    </>
  );
};

export default Product;
