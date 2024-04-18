import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import "./index.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product";
import PageNotFound from "./components/Misc/PageNotFound";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":category" element={<Products />}>
          </Route>
          
        </Route>
        <Route path="/products/:category/:id" element={<Product />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
