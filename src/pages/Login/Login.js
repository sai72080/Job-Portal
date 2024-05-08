import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./login.css";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOwner, setIsOwner] = useState(true);

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        isOwner ? "http://localhost:8000/login/owner" : "http://localhost:8000/login/employee",
        { email, password }
      );

      if (response.data === "exist") {
        Swal.fire({ icon: "success", title: "Sign-in successful!" });
        const redirectPath = isOwner ? "/homeO" : "/home";
        history(redirectPath, { state: { id: email, role: isOwner ? "owner" : "employee" } });
      } else if (response.data === "notexist") {
        Swal.fire({ icon: "error", title: isOwner ? "Owner not found" : "Employee not found" });
      }
    } catch (error) {
      console.error("Error signing in:", error);
      Swal.fire({ icon: "error", title: "Oops...", text: "Wrong details! Please try again." });
    }
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={submit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="login-input" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="login-input" />
        <div className="checkboxes">
          <label className="checkbox-label">
            <input type="checkbox" checked={isOwner} onChange={() => setIsOwner(!isOwner)} />
            Owner
          </label>
          <label className="checkbox-label">
            <input type="checkbox" checked={!isOwner} onChange={() => setIsOwner(!isOwner)} />
            Employee/Job Seeker
          </label>
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="login-or">OR</p>
      <Link to="/signup" className="login-signup-link">Signup</Link>
    </div>
  );
}

export default Login;