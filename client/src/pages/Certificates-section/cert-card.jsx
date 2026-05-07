import React from 'react';
import './cert-card.css';

function CertCard({cert}){
    return(
        <div className="Cert-Card">
            <img src={cert.imageUrl} className='cerimg'></img>
            <h1>{cert.certificatename}</h1>
        </div>
    )
}

export default CertCard;