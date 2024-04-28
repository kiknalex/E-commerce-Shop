import CategorySquare from "./CategorySquare";

const PickCategorySquare = () => {
  return (
    <div className="container">
      <div className="category-squares-container">
        <h2 className="category-heading title">Pick featured collections</h2>
        <div className="grid-category-squares">
          <CategorySquare title={"Casual"} category="men's clothing" imgSrc={"/casual.jpg"} />
          <CategorySquare title={"Formal"} category="women's clothing" imgSrc={"/formal.jpg"} />
          <CategorySquare title={"Party"} category="jewelery" imgSrc={"/party.jpg"} />
          <CategorySquare title={"Gym"} category="electronics" imgSrc={"/gym.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default PickCategorySquare;
