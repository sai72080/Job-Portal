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
                const response = await axios.get('http://localhost:8000/getjobs');
                if (response.data && Array.isArray(response.data.jobs)) {
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
    }, []); 

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
                    </li>
                ))}
            </ul>
            <FooterI />
        </div>
    );
};

export default ViewMyJobs;
