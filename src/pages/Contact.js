import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="contact-page container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="5" placeholder="Your message" required></textarea>
          </div>
          <button type="submit" className={`btn btn-primary ${isSubmitted ? 'submitted' : ''}`}>
            {isSubmitted ? <span className="tick-icon">&#10004;</span> : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
