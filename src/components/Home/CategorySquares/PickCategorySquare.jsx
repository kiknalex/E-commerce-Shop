import CategorySquare from "./CategorySquare";

const PickCategorySquare = () => {
  return (
    <div className="container">
      <div className="category-squares-container">
        <h2 className="category-heading title">Pick featured collections</h2>
        <div className="flex-category-squares">
          <CategorySquare category={"Casual"} imgSrc={"/casual.jpg"} />
          <CategorySquare category={"Formal"} imgSrc={"/formal.jpg"} />
          <CategorySquare category={"Party"} imgSrc={"/party.jpg"} />
          <CategorySquare category={"Gym"} imgSrc={"/gym.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default PickCategorySquare;
