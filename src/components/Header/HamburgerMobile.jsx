import { useEffect } from "react";
const HamburgerMobile = ({ mobileMenuShow, onClick }) => {
  return (
    <>
      <div
        onTouchStart={onClick}
        onClick={onClick}
        className={`outside-hamburger-click-close ${mobileMenuShow ? "opened" : ""}`}
      ></div>

      <nav
        
        className={`mobile-hamburger-container ${mobileMenuShow ? "opened" : ""}`}
      >
        <button onClick={onClick} aria-label="close" type="button" className="btn-modal-close">
          <i className="fa-solid fa-xmark fa-2xl"></i>
        </button>
        <ul className="flex-categories-mobile text--xl">
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">On Sale</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Brands</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMobile;
