import "./register.css";
import { Link } from "react-router-dom";
// import { useState } from "react"

export default function Register() {
  
  return (
    <div className="register">
      <span className="registertittle">Register with us</span>

      <form className="registerform">
        <label>Full Name</label>
        <input
          id="username"
          className="registerinput"
          type="text"
          placeholder="Enter your username.."
        />
        <label>Email</label>
        <input
          id="email"
          className="registerinput"
          type="text"
          placeholder="Enter your email..."
        />
           <label>Phone Number</label>
        <input
          id="email"
          className="registerinput"
          type="text"
          placeholder="Enter your phone number..."
        />
           <label>Driving Licence</label>
        <input
          id="email"
          className="registerinput"
          type="text"
          placeholder="Enter your driving licence..."
        />
           <label>Location</label>
        <input
          id="email"
          className="registerinput"
          type="text"
          placeholder="Enter your location..."
        />
           
        <label>Password</label>
        <input
          id="password"
          className="registerinput"
          type="text"
          placeholder="Enter your password..."
        />
        <button className="registerbutton">
          <Link className="link" to="/login">
            Login
          </Link>
        </button>
        <button className="loginbutton">
          <Link className="link" to="/Register">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}
