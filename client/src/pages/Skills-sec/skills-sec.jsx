import React, { useEffect, useState } from 'react';
import './skills-sec.css'
import SkillCard from './skillcard.jsx';

function Skillssec(){
    const [skill, setSkills] =useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/skills")
        .then(res=>res.json())
        .then(data=>setSkills(data))
    },[]);

    return(
       <div className='Skills-sec'>
         <div className='Sec-main'>
            <h1>My Skills</h1>
            <p>My skills so far</p>
        </div>
        <div>
           {skill.map((skill,index)=>(
                <SkillCard className="cardi" key={index} skill={skill}/>
           ))}
        </div>
       </div>
    )
}
export default Skillssec;