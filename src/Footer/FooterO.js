import React from "react";
import { Link } from "react-router-dom";
import { FaBlackTie, FaTwitter, FaGithub, FaGitlab } from "react-icons/fa";
import './footerO.css'; // Ensure the path is correct

const FooterO = () => {
  return (
    <footer className="footer">
      <div>
        <Link to="/" className="logo-link">
          <FaBlackTie className="logo-icon" />
          Staff-connect
        </Link>
        <p>Team Silicon</p>
      </div>
      <div className="social-links">
        <span className="social-title">Social</span>
        <div className="social-icons">
          <Link to="https://www.linkedin.com/in/pradosh27/">
            <FaTwitter className="social-icon" />
          </Link>
          <Link to="https://github.com/pradosh27">
            <FaGithub className="social-icon" />
          </Link>
          <Link to="https://github.com/pradosh27">
            <FaGitlab className="social-icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterO;
