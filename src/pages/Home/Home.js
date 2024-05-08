import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';
import Header from '../../Header/Header';
// import './Css/footer.css';
import SocialIcons from './SocialIcons';
// import Sidebar from '../../sidecomponents/Sidebar';
import Card from '../Card/Card';
import Newsletter from '../../sidecomponents/Newsletter';
// import Banner from '../../sidecomponents/Banner';
import FooterI from '../../Footer/FotterI';




// function JobOptions() {
//   return (
//     <div className="right-mid-container-content">
//       <form>
//         <input type="radio" id="option1" name="option" value="option1" />
//         <label htmlFor="option1">Bhubaneswar</label><br />

//         <input type="radio" id="option2" name="option" value="option2" />
//         <label htmlFor="option2">Cuttack</label><br />

//         <input type="radio" id="option3" name="option" value="option3" />
//         <label htmlFor="option3">Puri</label><br />
//       </form>
//       <form>

//       <input type="radio" id="option3" name="option" value="option3" />
//         <label htmlFor="option3">Any</label><br />
//         <input type="radio" id="option1" name="option" value="option1" />
//         <label htmlFor="option1">{`>`}10000</label><br />

//         <input type="radio" id="option2" name="option" value="option2" />
//         <label htmlFor="option2">{`>`}20000</label><br />

//       </form>
//     </div>

//   );
// }
const Footer = () => {
  return (
    <footer>
      <div className="foot" style={{ display: 'flex', paddingLeft: '30%', paddingRight: '30%' }}>
        <SocialIcons />
      </div>
      <div className="details">
        <div className="company test lnk">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contributors</a></li>
          </ul>
        </div>
        <div className="Job Types">
          <h3>Products</h3>
          <ul>
            <li><a href="#">House keeper</a></li>
            <li><a href="#">Supermarket</a></li>
            <li><a href="#">Drivers</a></li>
            <li><a href="#">Daily Workers</a></li>
          </ul>
        </div>
        <div className="useful-links test lnk">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">LINKK</a></li>
            <li><a href="#">LINKK</a></li>
            <li><a href="#">LINKK</a></li>
            <li><a href="#">LINKK</a></li>
          </ul>
        </div>
      </div>
      <h5 style={{ marginTop: '0px', color: 'white', textAlign: 'center' }}><i className="fa-regular fa-copyright " style={{ color: 'white' }}></i>2020-25 Kalinga, Inc. All Rights Reserved</h5>
    </footer>
  );
};



const Home = () => {
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8000/getJobs');
        setJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Header />
      <div className="top-content">
        <p className="top-content-p">Find Your New <span className='span'>Job</span></p>
      </div>

      <div className="top-sub-content">
        <p>thousands of jobs in local sectors are waiting for you</p>
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
              <label htmlFor="option2">{`>`}10000</label><br />

              <input type="radio" id="option3" name="option" value="option3" />
              <label htmlFor="option3">{`>`}20000</label><br />
            </form>
          </div>
          <div className="right-mid-container-content">
            <h1>Type-of-Job</h1>
            <form>
              <input type="radio" id="option1" name="option" value="option1" />
              <label htmlFor="option1">Any</label><br />

              <input type="radio" id="option2" name="option" value="option2" />
              <label htmlFor="option2">Full-Time</label><br />

              <input type="radio" id="option3" name="option" value="option3" />
              <label htmlFor="option3">Part-Time</label><br />
            </form>
          </div>
        </div>

        <div className="middle-mid-container">
          <div className="job-container">
            <h2>Job List</h2>
            {jobs.map((job) => (
              <Card key={job._id} job={job} />
            ))}
          </div>
        </div>

        <div className="right-mid-container">
          {/* <JobOptions />
          <JobOptions />
          <JobOptions /> */}
          <Newsletter />
        </div>
      </div>
      <FooterI />
    </div>

  );
}

export default Home;