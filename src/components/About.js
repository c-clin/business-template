import React from 'react';
import Footer from './Footer';
import plant1 from '../assets/plant-1.jpg';
import plant2 from '../assets/plant-2.jpg';
import plant3 from '../assets/plant-3.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="about__section-top">
        <div className="about-text-1">
          <h4>About Us</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dicta optio sunt eos aliquid itaque obcaecati eaque
            impedit! Sed quod hic architecto consequuntur, id tenetur corrupti
            porro ratione. Reprehenderit, voluptas. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            minus nam nihil perspiciatis sed excepturi reprehenderit id placeat
            est aspernatur modi amet, commodi consequuntur ipsa, iusto cum alias
            accusamus ratione!
          </p>
        </div>
        <div className="about-top-photo">
          <img src={plant1} alt="Room of plants" />
        </div>
        <div className="about-top-photo">
          <img src={plant2} alt="plants" />
        </div>
      </div>

      <div className="about__section-bottom">
        <div className="about-photo-3">
          <img src={plant3} alt="plants" />
        </div>
        <div className="about-text-2">
          buy online now & get 10% off!
          <button className="btn-inline">Shop now</button>
        </div>
      </div>
    </section>
  );
};

export default About;
