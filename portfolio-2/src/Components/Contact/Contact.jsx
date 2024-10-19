import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="form-container">
        <h2>Say Something</h2>
        <form action='https://getform.io/f/bzylpqga' method='POST'>
          <div className="input-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <textarea placeholder="Message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <div className="info-box">
          <h3>Location</h3>
          <p>abc road, Karachi,Pakistan</p>
        </div>
        <div className="info-box">
          <h3>Phone number</h3>
          <p>0123456789</p>
        </div>
        <div className="info-box">
          <h3>Email Address</h3>
          <p>hurmatayub64@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

