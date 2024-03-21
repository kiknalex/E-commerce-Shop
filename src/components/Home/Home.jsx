import BrandsBreakLine from "../Misc/BrandsBreakLine";
import HomeCategory from "./HomeCategory/HomeCategory";
import PickCategorySquare from "./CategorySquares/PickCategorySquare";
import ReviewsCarousel from "./Reviews/ReviewsCarousel";
const Home = () => {
  return (
    <div className="">
      <div className="flex-home container">
        <div className="home-intro-description">
          <h2 className="title--lg">FIND CLOTHES THAT MATCH YOUR STYLES</h2>
          <p className="text--gray">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="btn-pill btn-black">Shop Now</button>
          <div className="company-stats-flex">
            <div>
              <p className="text--xl text--bold">200+</p>
              <p className="text--sm text--gray">International Brands</p>
            </div>
            <div>
              <p className="text--xl text--bold">2000+</p>
              <p className="text--sm text--gray">High-quality Products</p>
            </div>
            <div>
              <p className="text--xl text--bold">30000+</p>
              <p className="text--sm text--gray">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="intro-bg"></div>
      </div>
      <BrandsBreakLine />
      <HomeCategory title="New Arrivals" />
      <HomeCategory title="Best Sellers" />
      <PickCategorySquare />
      <ReviewsCarousel />
    </div>
  );
};

export default Home;
