import React, { useEffect, useState } from 'react';
import './certif-sec.css';
import CertCard from './cert-card.jsx';

function CertifSec(){
    const [certificate, setCertificate] = useState([]);
    const [current, setCurrent] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [expanded, setExpanded] = useState(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/certificates`)
        .then(res => res.json())
        .then(data => setCertificate(data));
    }, []);

    // auto play
    useEffect(() => {
        if(certificate.length === 0 || paused) return;
        const timer = setInterval(() => {
            setCurrent(prev => prev === certificate.length - 1 ? 0 : prev + 1);
        }, 3000);
        return () => clearInterval(timer);
    }, [certificate, paused]);

    const prev = () => setCurrent(current === 0 ? certificate.length - 1 : current - 1);
    const next = () => setCurrent(current === certificate.length - 1 ? 0 : current + 1);

    if(certificate.length === 0) return <p>Loading...</p>;

    return (
        <div className='cert-sec'>
            <div className="txt-main">
                <h2>My Certificates</h2>
                <p>Certifications so far</p>
            </div>

            <div
                className='slider-wrapper'
                onMouseEnter={() => { setHovered(true); setPaused(true); }}
                onMouseLeave={() => { setHovered(false); setPaused(false); }}
            >
                <button className={`slider-btn left ${hovered ? 'visible' : ''}`} onClick={prev}>&#8592;</button>

                <div className='slider-track'>
                    <div className='slider-inner' style={{ transform: `translateX(-${current * 100}%)` }}>
                        {certificate.map((cert, index) => (
                            <div className='slide' key={index} onClick={() => setExpanded(cert)}>
                                <CertCard cert={cert} />
                            </div>
                        ))}
                    </div>
                </div>

                <button className={`slider-btn right ${hovered ? 'visible' : ''}`} onClick={next}>&#8594;</button>
            </div>

            {expanded && (
                <div className='cert-modal' onClick={() => setExpanded(null)}>
                    <div className='cert-modal-content' onClick={e => e.stopPropagation()}>
                        <button className='close-btn' onClick={() => setExpanded(null)}>✕</button>
                        <img src={expanded.imageUrl} alt={expanded.certificatename} className='cert-full-img' />
                        <h3>{expanded.certificatename}</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CertifSec;