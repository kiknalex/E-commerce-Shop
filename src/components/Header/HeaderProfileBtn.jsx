import SearchBar from "./SearchBar";
const HeaderProfileBtn = ({cart, removeCartItem, handleMouseClick}) => {
    const calculateItemsNumber = () => {
        return cart.reduce((acc, item) => {
            return acc += item.quantity;
        }, 0);
    }
    return (
        <div className="profile-btn-flex">
            <button className="btn-profile btn-search btn-search-mobile" onClick={handleMouseClick}><img src="/search-btn-black.png" className="btn-img" alt="search" /></button>
            <SearchBar />
            <button className="btn-profile btn-search card-item-count-container"><img src="/cart.png" alt="cart" />{cart.length > 0 && <span className="cart-item-count text--xxs">{calculateItemsNumber()}</span>}</button>
            <button className="btn-profile btn-search"><img src="/profile.png" alt="profile" /></button>
        </div>
    )
}

export default HeaderProfileBtn;