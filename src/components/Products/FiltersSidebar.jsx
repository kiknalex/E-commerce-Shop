import { Link } from "react-router-dom";
import RangeSlider from "react-range-slider-input";
import SizeSelector from "./SizeSelector";
const FiltersSidebar = ({
  handleSizeClick,
  handleFilterClick,
  isSizeActive,
  isFilterOpen,
  handlePriceEnter,
  price,
  setPrice,
  setIsFilterOpen
}) => {
  return (
    <>
      <div
        onTouchStart={() => setIsFilterOpen(false)}
        onClick={() => setIsFilterOpen(false)}
        className={`outside-hamburger-click-close ${
          isFilterOpen ? "opened" : ""
        }`}
      ></div>
      <div className={`filters-container ${isFilterOpen ? "opened" : ""}`}>
        <div className="filters-heading">
          <h2>Filters</h2>
          <button
            aria-label="close filter"
            className="btn-modal-close"
            onClick={() => setIsFilterOpen(false)}
          >
            <i className="fa-solid fa-xmark fa-2xl"></i>
          </button>
        </div>
        <div>
          <ul className="filter-categories">
            <li>
              <Link to="/products">All</Link>
            </li>
            <li>
              <Link to="jewelery">Jewelery</Link>
            </li>
            <li>
              <Link to="men's clothing">Men's clothing</Link>
            </li>
            <li>
              <Link to="women's clothing">Women's clothing</Link>
            </li>
            <li>
              <Link to="electronics">Electronics</Link>
            </li>
          </ul>
        </div>
        <div className="filter-price">
          <RangeSlider
            className="slider"
            min={0}
            max={1000}
            step={50}
            rangeSlideDisabled
            value={[price.min, price.max]}
            onInput={(value) => setPrice({ min: value[0], max: value[1] })}
          />
          <div className="filter-price-num">
            <label htmlFor="min-price-input" className="sr-only">
              Enter Minimum Price
            </label>
            <input
              type="text"
              value={price.min}
              autoComplete="off"
              onChange={(e) => handlePriceEnter(e.target.value, price.max)}
              inputMode="numeric"
              className="filter-price-num-input"
              maxLength={9}
              placeholder="0"
              id="min-price-input"
            />
            <label htmlFor="max-price-input" className="sr-only">
              Enter Maximum Price
            </label>
            <input
              type="text"
              value={price.max}
              autoComplete="off"
              onChange={(e) => handlePriceEnter(price.min, e.target.value)}
              inputMode="numeric"
              className="filter-price-num-input"
              maxLength={9}
              id="max-price-input"
            />
          </div>
        </div>
        <SizeSelector handleSizeClick={handleSizeClick} isSizeActive={isSizeActive} />

        <button
          className="btn-pill btn-black filter-apply"
          onClick={handleFilterClick}
        >
          Apply Filter
        </button>
      </div>
    </>
  );
};

export default FiltersSidebar;
