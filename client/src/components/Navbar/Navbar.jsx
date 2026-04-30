import React from 'react';
import './Navbar.css';
function Navbar() {
    return(
        <nav className="navbar">
            <h4>Shruti's Portfolio</h4>
            <ul className="navbar-links">
                <li> <a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#About">Projects</a></li>
                <li><a href="#About">Skills</a></li>
                <li><a href="#About">Education</a></li>
                <li><a href="#About">Contact Us</a></li>
            </ul>
            <button className="navbar-button">Resume</button>
        </nav>
    )
};

export default Navbar;