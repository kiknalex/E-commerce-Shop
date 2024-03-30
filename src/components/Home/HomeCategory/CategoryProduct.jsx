const CategoryProduct = () => {
  return (
    <div className="product-flex">
      <img src="casual.jpg" alt="" className="items-line-img" />
      <h3 className="title--sm">product name</h3>
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
