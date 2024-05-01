import { useState, useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product/Product";
import PageNotFound from "./components/Misc/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
function App() {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) ?? [] // lazy initial state, load local storage.
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const addToCart = (item, quantity, size) => {
    // Create a unique ID for the item based on its ID and size
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
  const decreaseQuantity = (item) => {
    const itemIdWithSize = `${item.id}-${item.size}`;
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.idWithSize === itemIdWithSize
    );
    if (existingItemIndex !== -1 && cart[existingItemIndex].quantity > 1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const increaseQuantity = (item) => {
    const itemIdWithSize = `${item.id}-${item.size}`;
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.idWithSize === itemIdWithSize
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (itemIdWithSize) => {
    setCart(cart.filter((item) => item.idWithSize !== itemIdWithSize));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root cart={cart} />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":category" element={<Products />}></Route>
        </Route>
        <Route
          path="/products/:category/:id"
          element={<Product addToCart={addToCart} />}
        ></Route>
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

function Root({ cart }) {
  return (
    <>
      <Header cart={cart} />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
