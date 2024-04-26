const FooterSubscribe = () => {
  return (
    <div className="container subscribe-container">
      <h4 className="title subscribe-heading">
        Stay upto date about our latest offers
      </h4>
      <form className="subscribe-form" aria-label="Subscribe to newsletter">
        <input
          type="email"
          className="subscribe-input btn-pill subscribe-input-email"
          placeholder="Enter your email address..."
          aria-label="Enter your email address"
        />

        <button className="btn-pill subscribe-input">
          Subscribe to newsletter
        </button>
      </form>
    </div>
  );
};

export default FooterSubscribe;
