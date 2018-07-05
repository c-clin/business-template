import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__link">Company</li>
            <li className="footer__link">Contact Us</li>
            <li className="footer__link">Careers</li>
            <li className="footer__link">Private Policy</li>
            <li className="footer__link">Terms</li>
          </ul>
        </div>
        <div className="footer__subscribe">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe Now</button>
        </div>
        <div className="footer__address">
          <p>12345 Main St,</p>
          <p>Los Angeles, CA 90026</p>
          <p>hello@prickles.com</p>
          <p>Tel: 123-456-7890</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; All rights reserved by Prickles.</p>
        <p>
          Pictures are from <a href="https://unsplash.com/">Unsplash</a>.
        </p>
        <p>Made by Catherine Lin</p>.
      </div>
    </footer>
  );
};

export default Footer;
