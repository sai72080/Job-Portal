import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import Header from '../Header/Header';
import './viewmyjob.css';
import FooterI from '../Footer/FotterI';

const ViewMyJobs = () => {
  const { userEmail } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/getjobs`);
        if (response.data.success && Array.isArray(response.data.jobs)) {
          setJobs(response.data.jobs);
        } else {
          setError('Unexpected response structure');
        }
      } catch (error) {
        setError('Error fetching jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [userEmail]);

  const handleDeleteJob = async (jobId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/deleteJob/${jobId}`, {
        data: { email: userEmail }
      });
      console.log(response.data); 
      if (response.data.success) {
        setJobs(jobs.filter(job => job._id !== jobId));
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error('Error deleting job:', error);
      alert('Failed to delete job.');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      <h2>All Jobs</h2>
      <ul className="job-list">
        {jobs.map(job => (
          <li key={job._id} className="job-item">
            <strong>{job.title}</strong> at {job.company}<br />
            Description: {job.description}<br />
            Requirements: {job.requirements}<br />
            Location: {job.location}<br />
            Salary: {job.salary} ({job.salaryType})<br />
            Job Location: {job.jobLocation}<br />
            Posting Date: {job.postingDate}<br />
            Experience Level: {job.experienceLevel}<br />
            Employment Type: {job.employmentType}<br />
            Posted By: {job.postedBy}<br />
            <img src={job.companyLogo} alt={job.company} style={{ maxWidth: '100px' }} /><br />
            <button onClick={() => handleDeleteJob(job._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <FooterI />
    </div>
  );
};

export default ViewMyJobs;
