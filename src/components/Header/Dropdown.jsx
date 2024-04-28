import { Link } from "react-router-dom";

const Dropdown = ({ dropdownShow }) => {
  return (
    <div className={`dropdown-container ${dropdownShow ? "active" : ""}`}>
      <div className={`dropdown-sections-flex ${dropdownShow ? "active" : ""}`}>
        <ul className="dropdown-items-flex">
          <li><Link to="/products">Shoes</Link></li>
          <li><Link to="/products">T-shirts</Link></li>
          <li><Link to="/products">Jackets</Link></li>
        </ul>
        <ul className="dropdown-items-flex">
          <li><Link to="/products">Shoes</Link></li>
          <li><Link to="/products">T-shirts</Link></li>
          <li><Link to="/products">Jackets</Link></li>
        </ul>
        <ul className="dropdown-items-flex">
          <li><Link to="/products">Shoes</Link></li>
          <li><Link to="/products">T-shirts</Link></li>
          <li><Link to="/products">Jackets</Link></li>
        </ul>
        <ul className="dropdown-items-flex">
          <li><Link to="/products">Shoes</Link></li>
          <li><Link to="/products">T-shirts</Link></li>
          <li><Link to="/products">Jackets</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
