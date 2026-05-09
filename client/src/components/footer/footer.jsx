import React, {useState, useEffect} from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer(){
    return(
        <div className='Footer'>
            <div className='line'></div>
           <div className='liv'> 
             <div className='icons'>
                <FaGithub  />
                <FaLinkedin />
                <FaInstagram />
                
            </div>
            <div>
                <p>@2026 All rights reserved</p>
            </div>
           </div>
        </div>
    )
}

export default Footer;