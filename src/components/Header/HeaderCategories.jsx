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
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">On Sale</a>
        </li>
        <li>
          <a href="">New Arrivals</a>
        </li>
        <li>
          <a href="">Brands</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderCategories;
