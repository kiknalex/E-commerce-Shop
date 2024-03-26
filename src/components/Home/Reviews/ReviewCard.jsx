import React from 'react';

const ReviewCard = ({ text, firstName, lastNameLetter }) => {
  return (
    <div className="review-card">
      <div className="rating">
        <p className="sr-only">Rating is 5 out of 5</p>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <h4 className="title--sm">
        {firstName} {lastNameLetter.toUpperCase()}. <i className="fa-solid fa-circle-check fa-sm"></i>
      </h4>
      <p className="text--gray">{text}</p>
    </div>
  );
};

export default ReviewCard;
