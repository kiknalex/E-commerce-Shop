import SizeSelector from "../SizeSelector";
import { useState } from "react";
const ProductDescription = ({ details }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    console.log(selectedSize);
  };

  const isSizeActive = (size) => {
    return selectedSize === size ? "size-active" : "";
  };

  if (Object.keys(details).length === 0) {
    return null;
  }
  return (
    <section className="product-info">
      <div className="product-description">
        <h1>{details.title}</h1>
        <p>{details.rating.rate}</p>
      </div>
      <SizeSelector
        handleSizeClick={handleSizeClick}
        isSizeActive={isSizeActive}
      />
      <div className="add-cart"></div>
    </section>
  );
};

export default ProductDescription;
