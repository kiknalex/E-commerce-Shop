import Dropdown from "./Dropdown";
const HeaderCategories = ({ dropdownShow, handleMouseIn, handleMouseOut }) => {
  return (
    <ul className="flex-header flex-categories">
      <li className={`dropdown-enter ${dropdownShow}`} onMouseEnter={handleMouseIn} onMouseOut={handleMouseOut} >
      <Dropdown dropdownShow={dropdownShow} handleMouseIn={handleMouseIn} handleMouseOut={handleMouseOut} />
        <a href="" >
          Shop
        </a>
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
  );
};

export default HeaderCategories;
