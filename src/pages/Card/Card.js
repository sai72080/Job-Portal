// Card.js
import React from 'react';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import './Card1.css';

const Card = ({ job }) => {
  // Check if job is not undefined before attempting to destructure
  if (!job) {
    return null; // or handle the case when job is undefined
  }

  const { _id, title, description, requirements, location, postingDate, minSalary, salary, salaryType, company } = job;

  return (
    <div className="card25">
      <section className="card256">
        <Link to={`/jobs/${_id}`} className="content" >
          <div className="card-details">
            <h4 className="card2">{company}</h4>
            <h3 className="card3">{title}</h3>
            <div className="container5">
              <span className="flex items-center gap-2"><div className='span-content-left'><FiMapPin/></div><div className='span-content'>{location}</div> </span>
              <span className="flex items-center gap-2"><div className='span-content-left'><FiClock/></div> <div className='span-content'>{salaryType}</div></span>
              <span className="flex items-center gap-2"><div className='span-content-left'><FiDollarSign/></div> <div className='span-content'>{salary}</div></span>
              <span className="flex items-center gap-2"><div className='span-content-left'><FiCalendar/></div> <div className='span-content'>{postingDate}</div></span>
            </div>
            <p className="text-base text-primary/70 ">{description}</p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Card;
