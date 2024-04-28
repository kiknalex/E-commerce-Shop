import { Link } from "react-router-dom";
const CategorySquare = ({ title, category, imgSrc }) => {
  return (
    <Link to={`products/${category}`} className="bg-img">
      <img
        src={imgSrc}
        alt=""
        width="50"
        height="100"
        className="category-square-img"
      />
      <h3 className="title--sm">{title}</h3>
    </Link>
  );
};

export default CategorySquare;
