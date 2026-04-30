import React from 'react';
import './service.css';

function Service(){
    return(
        <div>
            <div className="service-cont">
                <div className='first'>
                    <div className="service-card">
                    <h2>01</h2>
                    <div className='cardline'></div>
                    <h3>Web Development</h3>
                    <p>The technical process of building and maintaining websites, focusing on performance, coding, and site functionality.</p>
                </div>
                <div className="service-card2">
                    <h2>02</h2>
                    <div className='cardline2'></div>
                    <h3>UI/UX Design</h3>
                    <p>The practice of crafting intuitive interfaces and meaningful user experiences through research, wireframing, and visual design.</p>
                </div>

                </div>
                
                <div className='second'>
                    <div className="photocard"></div>
                    <div className='leftmost'>
                        <div className='lefttxt'> 
                            <h6>My Approach</h6>
                            <h2>Driven by data,</h2>
                            <h3 className="ano">fined by digital art.</h3>
                            <p>I combine my engineering background with professional design expertise to deliver interfaces that look great and work perfectly.</p>

                        </div>
                        <div className="bottomc">
                        <div className="service-card">
                    <h2>03</h2>
                    <div className='cardline'></div>
                    <h3>Data Analytics</h3>
                    <p>The systematic analysis of raw data to identify patterns, draw conclusions, and support informed business decisions.</p>
                </div>
                <div className="service-card2">
                    <h2>04</h2>
                    <div className='cardline2'></div>
                    <h3>Graphic Designs</h3>
                    <p>The art of visual communication using typography, imagery, and layout to convey specific messages or branding.</p>
                </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default Service;