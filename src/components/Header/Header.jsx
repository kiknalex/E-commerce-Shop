import HeaderCategories from "./HeaderCategories";
import SearchBar from "./SearchBar";
import HeaderProfileBtn from "./HeaderProfileBtn";
const Header = () => {

    return (
        <header className="container flex-header header">
            <h1 className="title"><a href="#">SHOP.CO</a></h1>
            <HeaderCategories />
            <SearchBar />
            <HeaderProfileBtn />
        </header>
    )
}

export default Header;