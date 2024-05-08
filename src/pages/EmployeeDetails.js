// EmployeeDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import './index12.css'; 
import './emp.css';
import Header from '../Header/Header';
import FooterI from '../Footer/FotterI';

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/getEmployee/${id}`);
        if (response.data.success) {
          setEmployee(response.data.employee);
        } else {
          console.error('Error fetching employee details:', response.data.error);
        }
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  return (
    <div>
      <Header />
      <h2>Employee Details</h2>

      <div className="container">
        <div className="card26">
          <p><b>Name:</b> {employee.userName}</p>
          <p><b>Email:</b> {employee.email}</p>
          <p><b>Contact Number:</b>{employee.contactNumber}</p>
          <p><b>Location:</b> {employee.location}</p>
          <p><b>Resume Link:</b> {employee.resumeLink}</p>
        </div>
        
      </div>
      {/* <div>
        <p>Name: {employee.userName}</p>
        <p>Email: {employee.email}</p>
        <p>Contact Number: {employee.contactNumber}</p>
        <p>Location: {employee.location}</p>
        <p>Resume Link: {employee.resumeLink}</p>
      </div> */}
      <FooterI />
    </div>
  );
};

export default EmployeeDetails;