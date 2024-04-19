const Gallery = ({ mainImage, images }) => {
  return (
    <div className="gallery">
      <img
        src={mainImage}
        alt=""
        width="600"
        height="900"
        className="main-thumbnail"
      />
      <div className="gallery-thumbnails">
        <img
          src={mainImage}
          alt=""
          width="600"
          height="900"
          className="small-thumbnail"
        />
        <img
          src={mainImage}
          alt=""
          width="600"
          height="900"
          className="small-thumbnail"
        />
        <img
          src={mainImage}
          alt=""
          width="600"
          height="900"
          className="small-thumbnail"
        />
      </div>
    </div>
  );
};

export default Gallery;
