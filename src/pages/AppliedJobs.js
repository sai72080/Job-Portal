// AppliedJobs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppliedJobs = ({ email }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/getAppliedJobs?email=${email}`);
        setAppliedJobs(response.data.appliedJobs);
      } catch (error) {
        console.error('Error fetching applied jobs:', error);
      }
    };

    fetchAppliedJobs();
  }, [email]);

  return (
    <div>
      <h2>Applied Jobs</h2>
      <ul>
        {appliedJobs.map((job) => (
          <li key={job._id}>{job.title} - {job.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
