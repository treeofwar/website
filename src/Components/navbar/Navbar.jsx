import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/chinchilla.jpg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="CodingPigeon__navbar">
      <div className="CodingPigeon__navbar-Links">
        <div className="CodingPigeon__navbar-links_logo">
          <img src={logo} alt="chinchilla" />
        </div>
        <div className="CodingPigeon__navbar-links_containers">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whatCodingPigeon">What is coding pigeon</a>
          </p>
          <p>
            <a href="#possibility">Languages</a>
          </p>
          <p>
            <a href="#features">Study</a>
          </p>
          <p>
            <Link to="/Resume">Resume</Link>
          </p>
        </div>
      </div>
      <div className="CodingPigeon__navbar-sign">
        <p>sign in</p>
        <button type="button"> sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
