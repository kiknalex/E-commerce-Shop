import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
const HeaderCategories = ({ dropdownShow, handleMouseIn, handleMouseOut }) => {
  return (
    <nav className="header-nav">
      <ul className="flex-header flex-categories">
        <li
          className={`dropdown-enter ${dropdownShow ? "active" : ""}`}
          onMouseEnter={handleMouseIn}
          onMouseOut={handleMouseOut}
        >
          <Dropdown dropdownShow={dropdownShow} />
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
  );
};

export default HeaderCategories;
