const SearchBar = () => {
  return (
    <form action="" className="search-bg flex-form">
      <button className="btn-search" aria-label="Search">
        <img src="/search-btn.png" className="btn-img" alt="search" />
      </button>
      <input type="text" name="search-product" aria-label="Search Products" placeholder="Search for products..." />
    </form>
  );
};

export default SearchBar;
