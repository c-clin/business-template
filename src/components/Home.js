import React from 'react';

import About from './About';
import Contact from './Contact';
import Collection from './Collection';

const Home = () => {
  return (
    <div>
      <header className="home">
        <div className="text-box">
          <h1 className="heading-primary">Prickles</h1>
          <p className="heading-sub">The botique store for plants</p>
        </div>
      </header>
      <About />
      <Collection />
      <Contact />
    </div>
  );
};

export default Home;
