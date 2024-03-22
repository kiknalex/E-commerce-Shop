const SearchBar = () => {
  return (
    <form action="" className="search-bg flex-form">
      <button className="btn-search">
        <img src="/search-btn.png" className="btn-img" alt="search" />
      </button>
      <input type="text" placeholder="Search for products..." />
    </form>
  );
};

export default SearchBar;
