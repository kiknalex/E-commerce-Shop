import React from "react";
import StarRating from "./StarRating";
const ReviewCard = ({ text, firstName, lastNameLetter }) => {
  return (
    <div className="review-card">
      <StarRating rating={5} />
      <h3 className="title--sm">
        {firstName} {lastNameLetter.toUpperCase()}.{" "}
        <i className="fa-solid fa-circle-check fa-sm"></i>
      </h3>
      <p className="text--gray">{text}</p>
    </div>
  );
};

export default ReviewCard;
