import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import {
  usePrevNextButtons,
  PrevButton,
  NextButton,
} from "../../Carousel/EmblaCarouselArrowButtons";
import ReviewCard from "./ReviewCard";
import useEmblaCarousel from "embla-carousel-react";
const ReviewsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [fakeReviews, setFakeReviews] = useState([]);
  useEffect(() => {
    setFakeReviews([
      ...Array(10)
        .keys()
        .map((el) => {
          return {
            firstName: faker.person.firstName(),
            lastNameLetter: faker.person.lastName()[0],
            text: faker.lorem.words(10),
          };
        }),
    ]);
  }, []);

  return (
    <div className="container">
      <div className="heading-carousel-container">
        <h2 className="heading-carousel title">Our Happy Customers</h2>
        <div className="slider-buttons">
          <PrevButton
          aria-label="Previous review"
            onClick={usePrevNextButtons(emblaApi).onPrevButtonClick}
          />
          <NextButton
          aria-label="Next review"
            onClick={usePrevNextButtons(emblaApi).onNextButtonClick}
          />
        </div>
      </div>
      <div ref={emblaRef} className="reviews-container">
        <div className="embla__container">
          {fakeReviews.map((review, id) => (
            <ReviewCard
              key={id}
              className="embla__slide"
              firstName={review.firstName}
              lastNameLetter={review.lastNameLetter}
              text={review.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
