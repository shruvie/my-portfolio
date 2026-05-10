import React, { useEffect, useState } from 'react';
import {Award} from 'lucide-react';
 
import CertCard from './certificate-card.jsx';
import "./addcert.css";
function Addcert(){
    const [certs, SetCerts]=useState([]);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/certificates`)
        .then(res=>res.json())
        .then(data=>SetCerts(data));
    },[]);

    return(
       <div>
        <div className="Proj-sec">
            <div>
                <p>Hello <span style={{color:"#096B68"}}>Shruti!</span></p>
            <h2>Welcome to your Admin Dashboard</h2>
            </div>
            <div className="Profile">
                <div className="myimg"></div>
                <div className="inimn">
                    <h4>Shruvie</h4>
                    <p>Admin</p>
                </div>
            </div>
        </div>
        <div>
            <div className='proj-sec2'>
                <h4 className="proj-fol"><Award className='fol'/>Certificates</h4>
                <h4 className="add">+ Add Certificates</h4>
            </div>
            <div className='cert-row'>
                { certs.length===0?(
                    <p>No certificates found</p>
                ):certs.map((cert,index)=>(
                    <CertCard key={index} cert={cert} />
                ))}
            </div>

        </div>
        </div>
    )
}
export default Addcert;