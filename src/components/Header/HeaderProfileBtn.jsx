import SearchBar from "./SearchBar";
const HeaderProfileBtn = ({handleMouseClick}) => {

    return (
        <div className="profile-btn-flex">
            <button className="btn-profile btn-search btn-search-mobile" onClick={handleMouseClick}><img src="/search-btn-black.png" className="btn-img" alt="search" /></button>
            <SearchBar />
            <button className="btn-profile btn-search"><img src="/cart.png" alt="cart" /></button>
            <button className="btn-profile btn-search"><img src="/profile.png" alt="profile" /></button>
        </div>
    )
}

export default HeaderProfileBtn;