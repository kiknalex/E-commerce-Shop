import React, { useState } from "react";
import QuantityControls from "./QuantityControls";

const AddToCart = ({ initialQuantity, item, addToCart, size, clearSize }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleAddClick = () => {
    if (size.length < 1) {
      return;
    }
    addToCart(item, quantity, size);
    setQuantity(1);
    clearSize();
  };

  return (
    <div className="quantity-controls-container">
      <QuantityControls
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        quantity={quantity}
      />
      <button
        onClick={handleAddClick}
        className="btn-black btn-pill change-quantity"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCart;
