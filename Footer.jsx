/* Footer — narrow navy band */
const Footer = ({ onMessage }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-inner">
        <div>
          <img className="footer-logo" src="logo-horizontal-trans.png" alt="Hira Accounting Group" style={{filter:"brightness(0) invert(1)",opacity:.95}}/>
          <p className="tagline">Clean books. Accurate numbers. Real communication. Clarity. Integrity. Growth.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="tel:+16144329470">(614) 432-9470</a>
          <a href="mailto:mohamed.coumbassa@hiraaccounting.com">mohamed.coumbassa@hiraaccounting.com</a>
          <p>Greater Cleveland Area · Remote</p>
        </div>
      </div>
      <div className="footer-legal">
        <span>© 2026 Hira Accounting Group LLC. All rights reserved.</span>
        <span>Greater Cleveland Area · Remote across the U.S.</span>
      </div>
    </div>
  </footer>
);
window.Footer = Footer;
