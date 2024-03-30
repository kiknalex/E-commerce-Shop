import SocMediaIcons from "../Misc/SocMediaIcons";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
  return (
    <>
      
      <footer className="footer-container">
      <FooterSubscribe />
        <div className="container">
          <div className="flex-footer">
            <div className="description-container">
              <h1 className="title">
                <a href="#">SHOP.CO</a>
              </h1>
              <p className="text--gray">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <SocMediaIcons />
            </div>
            <div className="footer-links">
              <div className="links-container">
                <h3 className="title--sm">Company</h3>
                <ul className="links-list text--gray">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Works</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                </ul>
              </div>
              <div className="links-container">
                <h3 className="title--sm">Help</h3>
                <ul className="links-list text--gray">
                  <li>
                    <a href="#">Customer Support</a>
                  </li>
                  <li>
                    <a href="#">Delivery Details</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="links-container">
                <h3 className="title--sm">FAQ</h3>
                <ul className="links-list text--gray">
                  <li>
                    <a href="#">Account</a>
                  </li>
                  <li>
                    <a href="#">Manage Deliveries</a>
                  </li>
                  <li>
                    <a href="#">Orders</a>
                  </li>
                  <li>
                    <a href="#">Payments</a>
                  </li>
                </ul>
              </div>
              <div className="links-container">
                <h3 className="title--sm">Resources</h3>
                <ul className="links-list text--gray">
                  <li>
                    <a href="#">Free eBooks</a>
                  </li>
                  <li>
                    <a href="#">Development tutorial</a>
                  </li>
                  <li>
                    <a href="#">How to - Blog</a>
                  </li>
                  <li>
                    <a href="#">Youtube Playlist</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
