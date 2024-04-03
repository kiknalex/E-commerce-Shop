const CategoryProduct = ({ title, price, category, description, image }) => {
  console.log(title);
  return (
    <div className="product-flex">
      <img
        src={image}
        alt=""
        width="300"
        height="300"
        className="items-line-img"
      />
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
    </div>
  );
};

export default CategoryProduct;
