import { Link } from "react-router-dom";

const CategoryProduct = ({ title, price, category, description, image, id }) => {
  return (
    <Link to={`/products/${category}/${id}`}>
      <div className="product-img-container">
      <img
        src={image}
        alt=""
        
        
        className="items-line-img"
      />
      </div>
      <h3 className="title--sm category-product-title">{title}</h3>
      <p className="category-product-price text--bold text">${price}</p>
      <div className="rating">
        <p className="sr-only">rating is 5 out of 5</p>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
    </Link>
  );
};

export default CategoryProduct;
