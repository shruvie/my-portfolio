import React, { useEffect, useState } from 'react';
import './contacts.css';
import { FaPaperPlane } from 'react-icons/fa';

function Contactsec(){

    const [contacts,SetContacts]=useState([]);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/contacts`)
        .then(res=>res.json())
        .then(data=>SetContacts(data));
    }, []);

    return(
       <div>
         <div className='Proj-sec'>
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
             <div className='cont-sec2'>
                <h4 className="cont-fol"><FaPaperPlane className='foli'/>Certificates</h4>
            </div>
            <div>
                <table className='tetab'>
                    <thead>
                        <tr>
                            <th style={{width:" 20%"}}>Contact No.</th>
                            <th style={{width: "30%"}}>Email</th>
                            <th style={{width: "50%"}}>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact, index)=>(
                        <tr key={index}>
                            <td>{contact.Contactno}</td>
                            <td>{contact.Email}</td>
                            <td>{contact.Message}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
       </div>
    )
}

export default Contactsec;