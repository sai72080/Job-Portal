import React, { useState } from 'react';
import './ContactUS.css'; // Make sure to include your CSS file
// import Header from '../../Header/Header';
import NavbarI from '../../Navbar/NavbarI';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log('Form submitted:', formData);
    // Optionally, you can reset the form data after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <NavbarI />
      <div className="heading">
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, feel free to reach out to us using the form below.</p>
      </div>
      <div className="container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
