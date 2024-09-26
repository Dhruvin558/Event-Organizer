import React from "react";
import "./Navbar1.css";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';



const Navbar1 = () => {
  return (
    <div className="navbar">
      {/* Logo on the left */}
      <img src="\image\logo.png" className="logo" alt="Logo" />

      {/* Links and Profile Picture on the right */}
      <div className="navbar-right">
  
      <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="home">
          Home
        </Link>
         
        <Link to="registration" spy={true} smooth={true} offset={50} duration={500} className="registration">
          Registration
        </Link>

        <Link to="about" spy={true} smooth={true} offset={50} duration={500} className="registration">
        About
        </Link>
        <img src="https://api.dicebear.com/9.x/pixel-art/svg" className="PP" alt="Profile" />
      </div>
    </div>
  );
};

export default Navbar1;
