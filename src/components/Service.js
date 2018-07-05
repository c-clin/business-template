import React from 'react';

import mp4Video from '../assets/video.mp4';
import webmVideo from '../assets/video.webm';

const Service = () => {
  return (
    <section className="service-container">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay loop>
          <source src={mp4Video} type="video/mp4" />
          <source src={webmVideo} type="video/webm" /> Your browser is not
          supported!
        </video>
      </div>

      <div className="service">
        <div className="service__box">
          <div className="service__picture service__picture--1" />
          <h3 className="service__title">Individual</h3>
          <p className="service__description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            quaerat optio, in natus quasi beatae minima qui libero, asperiores
            accusantium fugit necessitatibus, explicabo voluptatum cumque
            inventore repellendus quas ea minus!
          </p>
        </div>
        <div className="service__box">
          <div className="service__picture service__picture--2" />
          <h3 className="service__title">Holidays</h3>
          <p className="service__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            tempora amet modi facere laborum porro nesciunt pariatur, doloremque
            velit eveniet voluptate nam voluptatum temporibus quam iusto tempore
            veritatis ducimus architecto.
          </p>
        </div>
        <div className="service__box">
          <div className="service__picture service__picture--3" />
          <h3 className="service__title">Occasions</h3>
          <p className="service__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            molestias eos! Vitae magni delectus iusto reiciendis fuga dolorum
            sequi quasi, debitis at dicta laborum, non, aliquid facilis numquam
            quo perferendis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
