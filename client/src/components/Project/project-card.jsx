import React from 'react';
import './project-card.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
        <div className='card-tag'>{project.tag}</div>
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="maintxt">

        <h1>{project.title}</h1>
        <p>{project.description}</p>
          <div className='ttag'>
            {Array.isArray(project.techStack) && project.techStack.map((skill, index) => (
              <span key={index} className="skill">
                {skill}
              </span>
            ))}
          </div>
        
      </div>
    </div>
  );
}

export default ProjectCard;