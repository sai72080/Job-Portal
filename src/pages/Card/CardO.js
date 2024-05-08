// CardO.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const CardO = ({ employee }) => {
  const { _id, userName, email, contactNumber, location, resumeLink } = employee;

  return (
    <Link className='link-details25' to={`/employee/${_id}`}>
      <div className="card25">
        <h3>{userName}</h3>
        <p>Email: {email}</p>
        <p>Contact Number: {contactNumber}</p>
        <p>Location: {location}</p>
      </div>
    </Link>
  );
};

export default CardO;
