import HeaderCategories from "./HeaderCategories";
import SearchBar from "./SearchBar";
import HeaderProfileBtn from "./HeaderProfileBtn";

import { useState } from "react";
const Header = () => {
  const [dropdownShow, setDropdownShow] = useState("");

  const handleMouseIn = (e) => {
    setDropdownShow("active");
  };
  const handleMouseOut = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setDropdownShow("");
    }
  };
  return (
    <header className="container flex-header header">
      <h1 className="title">
        <a href="#">SHOP.CO</a>
      </h1>
      <HeaderCategories
        handleMouseIn={handleMouseIn}
        dropdownShow={dropdownShow}
        handleMouseOut={handleMouseOut}
      />

      <SearchBar />
      <HeaderProfileBtn />
    </header>
  );
};

export default Header;
