import React from 'react';
import './certificate.css';

function CertCard({cert}){
    return (
        <div className='certcard'>
            <img src= {cert.imageUrl} className='cerimg'></img>
            <p>{cert.certificatename}</p>
        </div>
    )
}

export default CertCard;