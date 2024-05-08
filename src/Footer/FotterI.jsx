import React from 'react';
import './FooterI.css';
const FooterI = () => {
  return (
    <footer className="footer1">
      <div className="container5">
        <div className="row">
          <div className="col-md-3">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>info@myjob-portal.com</p>
              <p>11110000111</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="quick-links">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Order a Resume</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Sectors</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <h2>Our Company</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 My Job Gator. All rights reserved.</p>
        <div className="social-networks">
          <a href="#">
            <img src="https://up.yimg.com/ib/th?id=OIP.QHODby_bS81-x2of8vCIhgAAAA&pid=Api&rs=1&c=1&qlt=95&w=116&h=116" alt="Facebook" />
          </a>
          <a href="#">
            <img src="https://up.yimg.com/ib/th?id=OIP.IOlJ2wJrAUpUh6T1la8kxAHaEK&pid=Api&rs=1&c=1&qlt=95&w=203&h=114" alt="Twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterI;
