import React, { useState, useEffect } from 'react';
import axios from "axios";
import './home.css';
import Header from '../../Header/Header';
import FooterI from '../../Footer/FotterI';
// import Banner from '../../sideowner/Banner';
// import './footer.css';
// import SocialIcons from './SocialIcons';
// import Sidebar from '../../sideowner/Sidebar';
// import Card from '../../sideowner/Card';
import Newsletter from '../../sideowner/Newsletter';
import CardO from '../Card/CardO';
// import FooterI from '../../Footer/FotterI';

const HomeO = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    // Fetch employee details from the backend
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getEmployees');
        setEmployeeData(response.data.employees);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);


  return (
    <div>
      <Header />
      <div className="top-content">
        <p className="top-content-p">Hire Your New <span className='span'><b>Employee</b></span></p>
      </div>

      <div className="top-sub-content">
        <p>Crave the hunger of job seekers!!!!</p>
      </div>

      <div className="mid-container">
        <div className="left-mid-container">

          <div className="right-mid-container-content">
            <h1>Location</h1>
            <form>
              <input type="radio" id="option1" name="option" value="option1" />
              <label htmlFor="option1">Bhubaneswar</label><br />

              <input type="radio" id="option2" name="option" value="option2" />
              <label htmlFor="option2">Cuttack</label><br />

              <input type="radio" id="option3" name="option" value="option3" />
              <label htmlFor="option3">Puri</label><br />
            </form>
          </div>
          <div className="right-mid-container-content">
            <h1>Salary</h1>
            <form>
              <input type="radio" id="option1" name="option" value="option1" />
              <label htmlFor="option1">Any</label><br />

              <input type="radio" id="option2" name="option" value="option2" />
              <label htmlFor="option2">10000</label><br />

              <input type="radio" id="option3" name="option" value="option3" />
              <label htmlFor="option3">20000</label><br />
            </form>
          </div>
          <div className="right-mid-container-content">
            <h1>Work-Experience</h1>
            <form>
              <input type="radio" id="option1" name="option" value="option1" />
              <label htmlFor="option1">Any experience</label><br />

              <input type="radio" id="option2" name="option" value="option2" />
              <label htmlFor="option2">0-2 years</label><br />

              <input type="radio" id="option3" name="option" value="option3" />
              <label htmlFor="option3">2-4 years</label><br />
            </form>
          </div>
        </div>

        <div className="middle-mid-container1">
          <h2>Employee Details</h2>
          <div className="card-container1">
            {employeeData.map((employee) => (

              <CardO employee={employee} />
            ))}
          </div>
        </div>

        <div className="right-mid-container">

          <Newsletter />
        </div>
      </div>
      <FooterI />
    </div>
  );
}

export default HomeO;