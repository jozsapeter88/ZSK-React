import React from 'react';
import './navbar2.css';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar2 = (props) => {
  return (
    <>
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="#"><img src='/Branding/logo.png' width="150px"/></a>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="btn2 close-btn">
          <FaTimes />
          </label>
          <li><a href="#about">Rólunk</a></li>
          <li><a href="#packages">Csomagok</a></li>
          <li><a href="#courses">Kurzusok</a></li>
          <li><a href="#forwho">Kinek ajánljuk?</a></li>
          <li><a href="#faq">GYIK</a></li>
        </ul>  
        <label htmlFor="menu-btn" className="btn2 menu-btn">
        <FaBars />
        </label>
      </div>
      </nav>
    </>
  );
}

export default Navbar2;
