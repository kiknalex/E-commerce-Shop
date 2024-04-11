const Dropdown = ({ dropdownShow }) => {
  return (
    <div className={`dropdown-container ${dropdownShow ? "active" : ""}`}>
      <div className={`dropdown-sections-flex ${dropdownShow ? "active" : ""}`}>
        <ul className="dropdown-items-flex">
          <li>Shoes</li>
          <li>T-shirts</li>
          <li>Jackets</li>
        </ul>
        <ul className="dropdown-items-flex">
          <li>Shoes</li>
          <li>T-shirts</li>
          <li>Jackets</li>
        </ul>
        <ul className="dropdown-items-flex">
          <li>Shoes</li>
          <li>T-shirts</li>
          <li>Jackets</li>
        </ul>
        <ul className="dropdown-items-flex">
          <li>Shoes</li>
          <li>T-shirts</li>
          <li>Jackets</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
