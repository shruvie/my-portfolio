import React, { useEffect, useState } from 'react'; 
import './admin-proj-card.css';
import {FaGithub,FaLink,FaTrash} from 'react-icons/fa';

function AdminProjCard({project}){
    
    return(
        <div className='card'>
            <img className='img' src={project.imageUrl} alt="project" />
            <div className="card-main">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className='Controls'>
                    <div className="links">
                     <a href={project.github} target="_blank" rel="noopener noreferrer">
    <FaGithub className='githu' />
  </a>

  <a href={project.live} target="_blank" rel="noopener noreferrer">
    <FaLink className='lin'/>
  </a>
                </div>
                <div><FaTrash className='dust' onClick={() => console.log("delete", project._id)}/></div>
                </div>
            </div>
           <div className='tag'>
  {project.skills?.map((skill, index) => (
    <span key={index} className="skill">
      {skill}
    </span>
  ))}
</div>
        </div>
    )
}

export default AdminProjCard;