import React from 'react';
import './sidebar.css';
import {FaGithub,FaLinkedin} from 'react-icons/fa';

function Sidebar(){
    return( 
        <div classname="cnt">
            <div className="side">
            <a href="https://github.com/shruvie" ><FaGithub /></a>
            <a href="https://linkedin.com/in/theshrutiverma" ><FaLinkedin /></a>
        </div>
        </div>
    )
};

export default Sidebar;