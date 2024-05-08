import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarI from './Navbar/NavbarI';
import IndexEmp from './Index/IndexE';
import FooterI from './Footer/FotterI';
import IndexOwner from './Index/IndexO';
import About from './pages/About/Arigato';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import HomePage from './pages/Home/Home';
import HomeOwner from './pages/Home/HomeO';
import Postjob from './pages/PostJob';
import JobDetails from './pages/JobDetails';
import EmployeeDetails from './pages/EmployeeDetails';
import AppliedJobs from './pages/AppliedJobs';
import ViewMyJobs from './pages/ViewMyJobs';
import { AuthProvider } from './pages/AuthContext';
import Nav from "./Header/Header";
import ContactUs from './pages/Contact/ContactUs';


function App() {
  const userEmail = "gh@gmail.com";
  return (
    <>
      {/* <NavbarI /> */}
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<IndexEmp />} />
            <Route path="/IndexO" element={<IndexOwner />} />
            <Route path="/arigato" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/homeO" element={<HomeOwner />} />
            <Route path="/navbar" element={<Nav />} />
            <Route path="/postjob" element={<Postjob />} />
            <Route path="/jobs/:id" element={<JobDetails email={userEmail} />} />
            <Route path="/employee/:id" element={<EmployeeDetails />} />
            <Route path="/appliedJobs/:email" element={<AppliedJobs />}></Route>
            <Route path="/ViewMyJobs" element={<ViewMyJobs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </AuthProvider>
      </Router>
      {/* <FooterI /> */}
    </>
  );
}

export default App;
