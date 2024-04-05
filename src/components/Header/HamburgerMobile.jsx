import { useEffect } from "react";
const HamburgerMobile = ({ mobileMenuShow, onClick, onPointerLeave }) => {
  return (
    <><div onTouchStart={onClick} onClick={onClick} className={`outside-hamburger-click-close ${mobileMenuShow}`}></div>
    <nav onPointerLeave={onPointerLeave} className={`mobile-hamburger-container ${mobileMenuShow}`}>
    
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
