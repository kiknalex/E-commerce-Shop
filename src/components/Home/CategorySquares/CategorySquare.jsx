const CategorySquare = ({ category, imgSrc }) => {
  return (
    <a className="bg-img">
      <img
        src={imgSrc}
        alt=""
        width="50"
        height="100"
        className="category-square-img"
      />
      <h3 className="title--sm">{category}</h3>
    </a>
  );
};

export default CategorySquare;
