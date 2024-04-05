import HeaderCategories from "./HeaderCategories";
import SearchMobile from "./SearchMobile";
import HeaderProfileBtn from "./HeaderProfileBtn";
import HamburgerMobile from "./HamburgerMobile";
import { useState } from "react";
const Header = () => {
  const [dropdownShow, setDropdownShow] = useState("");
  const [mobileSearchShow, setMobileSearchShow] = useState("");
  const [mobileMenuShow, setMobileMenuShow] = useState("");
  const handleMouseClick = (setStateElementShow) => {
    setStateElementShow((prevState) => {
      if (prevState === "") {
        return "opened";
      } else {
        return "";
      }
    });
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
          onClick={() => handleMouseClick(setMobileSearchShow)}
        />
        <SearchMobile
          mobileSearchShow={mobileSearchShow}
          onClick={() => handleMouseClick(setMobileSearchShow)}
        />
        <HamburgerMobile
          onClick={() => handleMouseClick(setMobileMenuShow)}
          mobileMenuShow={mobileMenuShow}
        />
      </div>
    </header>
  );
};

export default Header;
