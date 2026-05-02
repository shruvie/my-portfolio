import React from 'react';
import './Navbar.css';
function Navbar() {
    return(
        <nav className="navbar">
            <h4>Shruti's Portfolio</h4>
            <ul className="navbar-links">
                <li> <a href="#Home">Home</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Education">Education</a></li>
                <li><a href="#Contact Uss">Contact Us</a></li>
            </ul>
            <button className="navbar-button">Resume</button>
        </nav>
    )
};

export default Navbar;