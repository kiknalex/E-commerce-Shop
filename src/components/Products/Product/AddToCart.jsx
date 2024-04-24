import React, { useState } from "react";

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
    if(size.length < 1) {
        return;
    }
    addToCart(item, quantity, size);
    setQuantity(1);
    clearSize();
  }

  return (
    <div className="quantity-controls-container">
      <div className="btn-pill btn-size item-number-container">
        <button
          className="change-quantity"
          aria-label="Decrease quantity by 1"
          onClick={handleDecrease}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <input
          type="number"
          className="item-number"
          value={quantity}
          readOnly
        />
        <button
          className="change-quantity"
          aria-label="Increase quantity by 1"
          onClick={handleIncrease}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>

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
