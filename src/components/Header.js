import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <div className="header__name">
        <Link to="/">Prickles</Link>
      </div>
      <div className="header__navigation">
        <ul className="header__list">
          <li className="header__link">
            <Link to="/">Home</Link>
          </li>
          <li className="header__link">
            <Link to="/about">About</Link>
          </li>
          {/* <li className="header__link">
            <Link to="/Collection">Shop</Link>
          </li> */}
          <li className="header__link">
            <Link to="/service">Service</Link>
          </li>
          <li className="header__link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
