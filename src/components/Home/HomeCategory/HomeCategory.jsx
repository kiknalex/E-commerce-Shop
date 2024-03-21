import CategoryProduct from "./CategoryProduct";
const HomeCategory = ({title}) => {
    return (
        <div className="container home-category">
            <h2 className="category-heading">{title}</h2>
            <div className="items-line">
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
            </div>
            <a>View All</a>
        </div>
    )
}

export default HomeCategory;