import React from "react";
import ProjectCard from "../../components/Project/project-card.jsx";

function ProjectSection(){
    return(
        <div className="project-sec" >
            <div className="project-heading">
                <h1>My Projects</h1>
                <p>i have worked so far</p>
            </div>
            <ProjectCard
                    title="My Project"
                    description="A short description"
                    imageUrl="/path/to/image.jpg"
                    stack={["ui/ux", "Figma"]}   
                    tag="UI/UX DESIGN"/>
        </div>
    )
};

export default ProjectSection;