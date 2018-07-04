import React from 'react';

import collection1 from '../assets/collection-1.jpg';
import collection2 from '../assets/collection-2.jpg';
import collection3 from '../assets/collection-3.jpg';

const Collection = () => {
  return (
    <div className="collection">
      <div className="collection__card">
        <figure className="collection__card-picture">
          <img src={collection1} alt="cacti" />
          <figcaption className="collection__card-text">Cacti</figcaption>
        </figure>
        <div className="collection__card-back">
          <p className="btn-inline">Shop collection</p>
        </div>
      </div>
      <div class="collection__card">
        <figure className="collection__card-picture">
          <img src={collection2} alt="plant" />
          <figcaption className="collection__card-text">Plants</figcaption>
        </figure>
        <div className="collection__card-back">
          <p className="btn-inline">Shop collection</p>
        </div>
      </div>
      <div class="collection__card">
        <figure className="collection__card-picture">
          <img src={collection3} alt="sucullent" />
          <figcaption className="collection__card-text">Succulents</figcaption>
        </figure>
        <div className="collection__card-back">
          <p className="btn-inline">Shop collection</p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
