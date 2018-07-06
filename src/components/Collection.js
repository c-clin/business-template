import React from 'react';

import collection1 from '../assets/collection-1.jpg';
import collection2 from '../assets/collection-2.jpg';
import collection3 from '../assets/collection-3.jpg';

const Collection = () => {
  return (
    <section className="collection">
      <div className="collection__card">
        <figure className="collection__card-picture">
          <img src={collection1} alt="cacti" />
          <figcaption className="collection__card-text">Cacti</figcaption>
        </figure>

        <div className="collection__card-back">
          <div className="collection__card-back-details">
            <div className="stars">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </div>
            <p>Have yourself a cactus</p>
            <button className="btn-inline">Shop collection</button>
          </div>
        </div>
      </div>
      <div className="collection__card">
        <figure className="collection__card-picture">
          <img src={collection2} alt="plant" />
          <figcaption className="collection__card-text">Succulents</figcaption>
        </figure>

        <div className="collection__card-back">
          <div className="collection__card-back-details">
            <div className="stars">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </div>
            <p>The world needs more plants</p>
            <button className="btn-inline">Shop collection</button>
          </div>
        </div>
      </div>
      <div className="collection__card">
        <figure className="collection__card-picture">
          <img src={collection3} alt="sucullent" />
          <figcaption className="collection__card-text">Plants</figcaption>
        </figure>

        <div className="collection__card-back">
          <div className="collection__card-back-details">
            <div className="stars">
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
              <i className="fa fa-star" aria-hidden="true" />
            </div>
            <p>We love succulents</p>
            <button className="btn-inline">Shop collection</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
