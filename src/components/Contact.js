import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h3 className="contact-heading">For special requests and orders</h3>
      <hr />
      <form action="#" className="contact-form">
        <div className="form-group small-1">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            placeholder="Name*"
          />
        </div>
        <div className="form-group small-2">
          <label className="form-label" htmlFor="name">
            Email
          </label>
          <input
            className="form-input"
            type="text"
            id="email"
            placeholder="Email*"
          />
        </div>
        <div className="form-group big">
          <label className="form-label" htmlFor="name">
            Subject
          </label>
          <input
            className="form-input"
            type="text"
            id="subject"
            placeholder="Subject"
          />
        </div>
        <div className="form-group big">
          <label className="form-label" htmlFor="name">
            Message
          </label>
          <textarea
            className="form-input message"
            type="text"
            id="message"
            placeholder="Message"
          />
        </div>
        <button className="btn-send">Send</button>
      </form>
    </section>
  );
};

export default Contact;
