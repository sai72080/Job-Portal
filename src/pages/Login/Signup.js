import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./signup.css";

function OwnerSignup() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [shopName, setShopName] = useState('');
  const [location, setLocation] = useState('');
  const [pancardNumber, setPancardNumber] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup/owner", {
        email,
        userName,
        contactNumber,
        shopName,
        location,
        pancardNumber,
        password,
      });

      if (response.data === "exist") {
        Swal.fire({
          icon: "error",
          title: "User already exists",
        });
      } else if (response.data === "notexist" && email) {
        Swal.fire({
          icon: "success",
          title: "Sign-up successful!",
        });
        history("/homeO", { state: { id: email, role: "owner" } });
      }
    } catch (error) {
      console.error("Error submitting owner signup:", error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again.",
      });
    }
  }

  return (
    <div className="signup1">
      <h1>Owner Signup</h1>
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="hidden" onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
        <input type="hidden" onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" />
        <input type="hidden" onChange={(e) => setShopName(e.target.value)} placeholder="Shop Name" />
        <input type="hidden" onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        <input type="hidden" onChange={(e) => setPancardNumber(e.target.value)} placeholder="Pancard Number" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="submit" onClick={submit} />
      </form>
    </div>
  );
}


function EmployeeSignup() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [location, setLocation] = useState('');
  const [resumeLink, setResumeLink] = useState(''); 
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/signup/employee", {
        email,
        userName,
        contactNumber,
        location,
        resumeLink,
        password,
      });

      if (response.data === "exist") {
        Swal.fire({
          icon: "error",
          title: "User already exists",
        });
      } else if (response.data === "notexist" && email) {
        Swal.fire({
          icon: "success",
          title: "Sign-up successful!",
        });
        history("/home", { state: { id: email, role: "employee" } });
      }
    } catch (error) {
      console.error("Error submitting employee signup:", error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again.",
      });
    }
  }

  return (
    <div className="signup1">
      <h5>Employee Signup</h5>
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Username" />
        <input type="Number" onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" />
        <input type="text" onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        <input type="hidden" onChange={(e) => setResumeLink(e.target.value)} placeholder="Resume Link" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="submit" onClick={submit} />
      </form>
      
    </div>
  );
}


function Signup() {
  const [isOwner, setIsOwner] = useState(true);

  return (
    <div className="signup">
      <h1></h1>
      {isOwner ? <OwnerSignup /> : <EmployeeSignup />}

      <label>
        <input
          type="checkbox"
          checked={isOwner}
          onChange={() => setIsOwner(!isOwner)}
        />
        Owner
      </label>
      <label>
        <input
          type="checkbox"
          checked={!isOwner}
          onChange={() => setIsOwner(!isOwner)}
        />
        Employee/Job Seeker
      </label>

      <br />
      <p>OR If you already have an account than</p>
      <Link to="/Login">Login</Link>
      
    </div>
  );
}

export default Signup;
