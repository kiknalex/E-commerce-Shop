const SearchMobile = ({ mobileSearchShow, onClick }) => {
  return (
    <form action="" className={`mobile-search-container ${mobileSearchShow}`}>
      <div className="mobile-search">
        <label htmlFor="search-product" hidden>
          Search for items
        </label>
        <button className="btn-search" aria-label="Search">
          <img src="/search-btn.png" className="btn-img" alt="search" />
        </button>
        <input
          type="text"
          name="search-product"
          id="search-product"
          aria-label="Search Products"
          placeholder="Search for products..."
        />
      </div>
      <div className="mobile-search-close">
        <button onClick={onClick} aria-label="close" type="button">
        <i className="fa-solid fa-xmark fa-2xl"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchMobile;
