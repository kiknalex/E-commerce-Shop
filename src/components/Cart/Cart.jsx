import Path from "../Products/Path";
import QuantityControls from "../Products/Product/QuantityControls";
import { capitalize, calculateSubtotal, calculateDiscount, calculateTotal } from "../Helpers/Helpers";
const Cart = ({ cart, decreaseQuantity, increaseQuantity, removeFromCart }) => {
  return (
    <>
      <Path path={[{route: "cart" , link: "/cart"}]} />
      {cart.length ?
      <main className="cart-page-container container">
        <h1>Your Cart</h1>
        <div className="cart-flex">
          <div className="cart-products-container">
            {cart.map((item) => {
              return (
                <div className="cart-product-container" key={item.idWithSize}>
                  <div className="cart-product-description">
                    <img
                      src={item.image}
                      className="cart-product-img"
                      alt=""
                      width="900"
                      height="600"
                    />
                    <div>
                      <h3 className="title--sm">{item.title}</h3>
                      <p className="text--marginless">
                        Size:{" "}
                        <span className="text--gray">
                          {capitalize(item.size)}
                        </span>
                      </p>
                      <p className="cart-product-price text--bold text--lg text--marginless">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                  <div className="cart-product-controls">
                    <button onClick={() => removeFromCart(item.idWithSize)} aria-label="Remove product">
                      <i
                        className="fa-solid fa-trash-can"
                        style={{ color: "#c92c2c" }}
                      ></i>
                    </button>
                    <QuantityControls
                      handleDecrease={() => decreaseQuantity(item)}
                      handleIncrease={() => increaseQuantity(item)}
                      quantity={item.quantity}
                    />
                  </div>
                </div>
              );
            })
          
          }
          </div>
          <div className="order-container">
            <h2 className="title--sm text--bold">Order Summary</h2>
            <div className="">
              <div className="order-layout">
                <p className="text--gray text--marginless">Subtotal</p>
                <p className="text--bold text--marginless">${calculateSubtotal(cart)}</p>
              </div>
              <div className="order-layout">
                <p className="text--gray text--marginless">Discount (-20%)</p>
                <p className="text--bold text--marginless" style={{ color: "red" }}>${calculateDiscount(cart, 20)}</p>
              </div>
              <div className="order-layout">
                <p className="text--gray text--marginless">Delivery Fee</p>
                <p className="text--bold text--marginless">$15</p>
              </div>
            </div>
            <div className="order-layout">
              <p className="text--lg">Total</p>
              <p className="text--lg text--bold">${calculateTotal(cart, 20, 15)}</p>
            </div>
            <button className="btn-pill btn-black checkout-btn">Go to Checkout <span><i className="fa-solid fa-arrow-right"></i></span></button>
          </div>
        </div>
        
        
      </main>

      : <main className="cart-page-container container">
        <h1>Your cart is empty.</h1>
        </main>}
    </>
  );
};

export default Cart;
