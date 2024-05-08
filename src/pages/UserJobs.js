import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserJobs = ({ location }) => {
  const [userJobs, setUserJobs] = useState([]);

  useEffect(() => {
    const fetchUserJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/getJobsByUser/${location.state.id}`);
        setUserJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching user jobs:', error);
      }
    };

    fetchUserJobs();
  }, [location.state.id]);

  return (
    <div>
      <h2>Your Posted Jobs</h2>
      <div>
        {userJobs.map((job) => (
          // Render each job card here
          <div key={job._id}>
            <h3>{job.title}</h3>
            {/* Add other job details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserJobs;
