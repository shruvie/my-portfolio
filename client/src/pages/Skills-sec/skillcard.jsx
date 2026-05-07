import React from 'react';
import './skillscard.css';

function SkillCard({skill}){
    return(
        <div className='skill-card'>
            <img src={skill.imageUrl} className='skillimg'></img>
            <div className='lie'></div>
            <h3>{skill.skillname}</h3>
        </div>
    )
}
export default SkillCard;