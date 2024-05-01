import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Path from "../Path";
import Gallery from "./Gallery";
import ProductDescription from "./ProductDescription";
import ProductInfoTabs from "./ProductInfoTabs";
import HomeCategory from "../../Home/HomeCategory/HomeCategory";
const Product = ({ addToCart }) => {
  const [productDetails, setProductDetails] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setProductDetails(data);
      })
      .catch((error) => {
        navigate("/products");
        console.error("Error fetching product details:", error);
      });
  }, [params.id]);

  return (
    <>
      <Path path={[{route: params.category, link: `/products/${params.category}`}]} />
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
