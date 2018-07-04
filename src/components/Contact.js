import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h3 className="contact-heading">For special requests and orders</h3>
      <form action="#" className="contact-form">
        <div className="form-group small">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-input" type="text" id="name" />
        </div>
        <div className="form-group small">
          <label className="form-label" htmlFor="name">
            Email
          </label>
          <input className="form-input" type="text" id="email" />
        </div>
        <div className="form-group big">
          <label className="form-label" htmlFor="name">
            Subject
          </label>
          <input className="form-input" type="text" id="subject" />
        </div>
        <div className="form-group big">
          <label className="form-label" htmlFor="name">
            Message
          </label>
          <input className="form-input" type="text" id="message" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
