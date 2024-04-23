import { useState } from "react";
import ReviewCard from "../../Home/Reviews/ReviewCard";
const ProductInfoTabs = ({ details }) => {
  const [fakeReviews, setFakeReviews] = useState([...Array(6)]);
  const [activeTab, setActiveTab] = useState(0);
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const loadReviews = () => {
    setFakeReviews((prevState) => [...prevState, ...Array(6)]);
  };
  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <div className="container product-tabs-container">
      <ul className="product-tabs">
        <li className={`tab-link ${activeTab === 0 ? "current" : ""}`}>
          <button className="tab-link-btn" onClick={() => handleTabChange(0)}>
            Product Details
          </button>
        </li>
        <li className={`tab-link ${activeTab === 1 ? "current" : ""}`}>
          <button className="tab-link-btn" onClick={() => handleTabChange(1)}>
            Rating & Reviews
          </button>
        </li>
        <li className={`tab-link ${activeTab === 2 ? "current" : ""}`}>
          <button className="tab-link-btn" onClick={() => handleTabChange(2)}>
            FAQs
          </button>
        </li>
      </ul>
      <div className="content-tab">
        <div className={`tab-content ${activeTab === 0 ? "current" : ""}`}>
          {details.description}
        </div>
        <div className={`tab-content ${activeTab === 1 ? "current" : ""}`}>
          <div className="product-reviews-grid">
            {fakeReviews &&
              fakeReviews.map((review, index) => (
                <div key={index} className="long-review-wrapper">
                  <ReviewCard
                    firstName={"Dorem"}
                    lastNameLetter={"I"}
                    text={text}
                  />
                </div>
              ))}
          </div>
          <button
            className="btn-pill btn-white btn-center"
            onClick={loadReviews}
          >
            Load more reviews
          </button>
        </div>
        <div className={`tab-content ${activeTab === 2 ? "current" : ""}`}>
  <h2>Q: Where Did My Shopping Cart Go?</h2>
  <p>
    Product can no longer be purchased directly through SHOP.CO. The
    new SHOP.CO is a showcase for the full line of SHOP.CO
    sunglasses and eyeglasses. When available, products on the site will
    be linked to purchase at partner retail sites like SHOP.CO and
    SHOP.CO.
  </p>

  <h2>
    Q. Can I Still Return Product I Purchased Directly on SHOP.CO?
  </h2>
  <p>
    If you purchased sunglasses on SHOP.CO prior to May 2, 2022, and
    you are within 30 days of your purchase date, we will still be
    accepting returns if you are not satisfied with your purchase.
    Simply follow these steps to return the merchandise:
  </p>
  <ol>
    <li>
      Call 1 (844) 789-6035 within 30 days from the original ship date.
      Our Customer Service team will initiate a return authorization and
      provide you with a free return shipping label.
    </li>
    <li>
      Pack the product in a box to ensure secure shipping. Do not ship
      products in soft packs or envelopes.
    </li>
    <li>Print the pre-paid UPS shipping label.</li>
    <li>Drop the package off at your nearest UPS location.</li>
    <li>
      Once we receive your product, we will provide you with full credit
      within 3–5 business days.
    </li>
  </ol>
  <p>
    This return process only applies to purchases made on SHOP.CO.
    Proof of purchase is needed for a return.
  </p>
</div>

      </div>
    </div>
  );
};

export default ProductInfoTabs;
