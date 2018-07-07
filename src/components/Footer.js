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
          Pictures are from{' '}
          <a href="https://unsplash.com/" className="footer__link">
            Unsplash
          </a>.
        </p>
        <p>
          Made by{' '}
          <a href="https://github.com/c-clin" className="footer__link">
            Catherine Lin
          </a>
        </p>.
      </div>

      <div className="footer__social-media">
        <i className="fa fa-facebook footer-icon" aria-hidden="true" />
        <i className="fa fa-google-plus footer-icon" aria-hidden="true" />
        <i className="fa fa-pinterest-p footer-icon" aria-hidden="true" />
        <i className="fa fa-instagram footer-icon" aria-hidden="true" />
      </div>
    </footer>
  );
};

export default Footer;
