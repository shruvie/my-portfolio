import React from 'react';
import './home.css';
import { PiSparkleFill } from "react-icons/pi";

function Home(){
    return(
        <div>
            
            <div className="home-cont">
            <button className="freelance"><PiSparkleFill className="sparkle-icon" />
    Available for Freelance</button>
            <h3 className="im">Hello, I'm</h3>
            <h1 className="Name">Shruti Verma</h1>
            <p className="desc" >I craft digital experiences where stunning design meets powerful code. From pixel-perfect interfaces to scalable backends — I build products that users love and businesses thrive on.</p>
            <div className="t-buttons">
                <button className="hire">Contact Me</button>
                <button className="resume">My Resume</button>
            </div>
            </div>
        </div>
    )
};
export default Home;