const FooterSubscribe = () => {
  return (
    <div className="container subscribe-container">
      <h4 className="title subscribe-heading">Stay upto date about our latest offers</h4>
      <form action="submit" className="subscribe-form">
        <input
          type="text"
          className="subscribe-input btn-pill"
          placeholder="Enter your email address..."
        />
        <button className="btn-pill subscribe-input">Subscribe to newsletter</button>
      </form>
    </div>
  );
};

export default FooterSubscribe;
