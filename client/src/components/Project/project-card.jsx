import React from 'react';
import './project-card.css';


function ProjectCard({ title, description, imageUrl, stack,tag }){
    return(
        <div className ="project-card">
            <img src={imageUrl} alt={title} className="project-image"/>
            {tag && <span className="card-tag">{tag}</span>}
            <div className="maintxt">
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="stack-frame">
                     <div className="stack-frame">
                    {stack?.map((item, i) => (
                        <div className="stack" key={i}>
                            <p>{item}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;