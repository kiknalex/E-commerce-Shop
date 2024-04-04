import HeaderCategories from "./HeaderCategories";
import SearchMobile from "./SearchMobile";
import HeaderProfileBtn from "./HeaderProfileBtn";

import { useState } from "react";
const Header = () => {
  const [dropdownShow, setDropdownShow] = useState("");
  const [mobileSearchShow, setMobileSearchShow] = useState("");

  const handleMouseClick = () => {
    if(mobileSearchShow === "") {
      setMobileSearchShow("opened")
    } else {
      setMobileSearchShow("");
    }
    

  }
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
          <button className="btn-profile btn-search btn-hamburger">
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

        
        <HeaderProfileBtn onClick={handleMouseClick} />
        <SearchMobile mobileSearchShow={mobileSearchShow} onClick={handleMouseClick} />
      </div>
    </header>
  );
};

export default Header;
