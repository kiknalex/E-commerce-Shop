import { useState, useEffect } from "react";

const Gallery = ({ mainImage, images }) => {
  const [currentImage, setCurrentImage] = useState(mainImage);

  useEffect(() => {
    setCurrentImage(mainImage);
  }, [mainImage]);
  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="gallery">
      <img src={currentImage} alt="Main thumbnail" className="thumbnail-main" />
      <div className="thumbnails-gallery">
        {images.map((image, index) => (
          <button
            key={index}
            className={`thumbnail-button `}
            onClick={() => handleThumbnailClick(image)}
            aria-label={`thumbnail ${index + 1}`}
          >
            <img
              src={image}
              alt=""
              width="150"
              height="150"
              className={`thumbnail-small ${
                currentImage === image ? "active-thumbnail" : ""
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
