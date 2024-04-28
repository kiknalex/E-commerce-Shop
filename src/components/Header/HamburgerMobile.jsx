import { useEffect } from "react";
import { Link } from "react-router-dom";
const HamburgerMobile = ({ mobileMenuShow, handleMouseClick }) => {
  return (
    <>
      <div
        onTouchStart={handleMouseClick}
        onClick={handleMouseClick}
        className={`outside-hamburger-click-close ${mobileMenuShow ? "opened" : ""}`}
      ></div>

      <nav
        
        className={`mobile-hamburger-container ${mobileMenuShow ? "opened" : ""}`}
      >
        <button onClick={handleMouseClick} aria-label="close" type="button" className="btn-modal-close">
          <i className="fa-solid fa-xmark fa-2xl"></i>
        </button>
        <ul className="flex-categories-mobile text--xl">
          <li>
            <Link to="/products">Shop</Link>
          </li>
          <li>
          <Link to="/products">Best Sellers</Link>
          </li>
          <li>
          <Link to="/products">New Arrivals</Link>
          </li>
          <li>
          <Link to="/products">Brands</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMobile;
