import HeaderCategories from "./HeaderCategories";
import SearchMobile from "./SearchMobile";
import HeaderProfileBtn from "./HeaderProfileBtn";
import HamburgerMobile from "./HamburgerMobile";
import { useState } from "react";
const Header = ({ cart, removeFromCart }) => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [mobileSearchShow, setMobileSearchShow] = useState(false);
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const handleMouseClick = (setStateElementShow) => {
    setStateElementShow((prevState) => !prevState);
  };

  const handleMouseIn = (e) => {
    setDropdownShow("active");
  };
  const handleMouseOut = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDropdownShow("");
    }
  };
  return (
    <>
      <a className="sr-only" href="#main-content">
        Skip to main content
      </a>
      <header className="header-bg">
        <div className="container flex-header header">
          <div className="flex-title">
            <button
              onClick={() => handleMouseClick(setMobileMenuShow)}
              className="btn-profile btn-search btn-hamburger"
            >
              <img src="/hamburger.png" alt="s" />
            </button>
            <a href="#" className="link-home-header" aria-label="Home">
              <img className="link-home-img" src="/SHOP.CO.png" alt="" />
            </a>
          </div>
          <HeaderCategories
            handleMouseIn={handleMouseIn}
            dropdownShow={dropdownShow}
            handleMouseOut={handleMouseOut}
          />

          <HeaderProfileBtn
            handleMouseClick={() => handleMouseClick(setMobileSearchShow)}
            cart={cart}
            removeFromCart={removeFromCart}
          />
          <SearchMobile
            mobileSearchShow={mobileSearchShow}
            handleMouseClick={() => handleMouseClick(setMobileSearchShow)}
          />
          <HamburgerMobile
            handleMouseClick={() => handleMouseClick(setMobileMenuShow)}
            mobileMenuShow={mobileMenuShow}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
