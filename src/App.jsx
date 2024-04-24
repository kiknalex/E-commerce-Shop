import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import PageNotFound from "./components/Misc/PageNotFound";
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity, size) => {
    // Create a unique identifier for the item based on its ID and size
    console.log(cart);
    const itemIdWithSize = `${item.id}-${size}`;

    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.idWithSize === itemIdWithSize
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity || 1;
      setCart(updatedCart);
    } else {
      const newItem = { ...item, quantity, size, idWithSize: itemIdWithSize };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };
  return (
    <BrowserRouter>
      <Header cart={cart} removeFromCart={removeFromCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":category" element={<Products />}></Route>
        </Route>
        <Route
          path="/products/:category/:id"
          element={<Product addToCart={addToCart} />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
