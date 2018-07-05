import React from 'react';

import mp4Video from '../assets/video.mp4';
import webmVideo from '../assets/video.webm';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay loop>
          <source type="video/mp4" />
          <source src={webmVideo} type="video/webm" /> Your browser is not
          supported!
        </video>
      </div>
    </section>
  );
};

export default Testimonials;
