import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './job.css';
// import FooterO from '../Footer/FooterO';
import Swal from 'sweetalert2';

const JobDetails = ({ email }) => {
  const [job, setJob] = useState(null);
  const [isApplied, setIsApplied] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        if (!id) {
          console.error('Job ID not found in params');
          return;
        }

        const response = await axios.get(`http://localhost:8000/getJob/${id}`);
        setJob(response.data.job);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleApplyNow = async () => {
    try {
      console.log('Applying for job with ID:', id);
      if (!id) {
        console.error('Job ID not found');
        return;
      }

      if (job.applicants && job.applicants.includes(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You have already applied for this job!',
        });
        return;
      }

      await axios.post(`http://localhost:8000/applyJob/${id}`, { email });

      // Set the flag to indicate successful application
      setIsApplied(true);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'You have successfully applied for this job!',
      }).then(() => {
        navigate(`/appliedJobs/${email}`);
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      // Handle the error (e.g., show an error message)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='card-details5'>
        <Header />
        <div>
          <div className='job-details'><h2>{job.title}</h2>
          </div>


          <div className='job-require'>
            <p><b>Location: </b>{job.location}</p>
            <p><b>Salary: </b>{job.salary}</p>
            <p><b>Shop Name: </b>{job.company}</p>

            <p><b>Salary Type: </b>{job.salaryType}</p>
            <p><b>Job Location: </b>{job.jobLocation}</p>
            <p><b>Posting Date: </b> {job.postingDate}</p>
            <p><b>Experience Level: </b>Experience Level: {job.experienceLevel}</p>
            <p><b>Employment Type: </b> {job.employmentType}</p>
            <p><b>Description: </b> {job.description}</p>
            <p><b>Requirements: </b> {job.requirements}</p>


            <button onClick={handleApplyNow} disabled={isApplied}>
              Apply Now
            </button>

          </div>
          {/* Success message */}
          {isApplied && <p>You have successfully applied for this job!</p>}
          {/* Add other details as needed */}


        </div>
      
      </div>
      {/* <FooterO /> */}
    </>
  );
};

export default JobDetails;
