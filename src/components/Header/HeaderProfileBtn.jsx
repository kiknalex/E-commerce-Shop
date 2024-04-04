import SearchBar from "./SearchBar";
const HeaderProfileBtn = ({onClick}) => {

    return (
        <div className="profile-btn-flex">
            <button className="btn-profile btn-search search-mobile" onClick={onClick}><img src="/search-btn-black.png" className="btn-img" alt="search" /></button>
            <SearchBar />
            <button className="btn-profile btn-search"><img src="/cart.png" alt="cart" /></button>
            <button className="btn-profile btn-search"><img src="/profile.png" alt="profile" /></button>
        </div>
    )
}

export default HeaderProfileBtn;