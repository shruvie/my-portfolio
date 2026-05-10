import React ,{useEffect,useState} from "react";
import ProjectCard from "../../components/Project/project-card.jsx";
import './project-sec.css';
function ProjectSection(){
    const [projects,SetProjects]=useState([]);
        useEffect(() =>{
            fetch(`${import.meta.env.VITE_API_URL}/projects`)
            .then(res=>res.json())
            .then(data=>{
          console.log(data); // 🔍 check this
          SetProjects(data);
        })
            .catch(err=>console.log(err));
        },[]);
    
    return(
        <div className="project-sec" >
            <div className="project-heading">
                <h1>My Projects</h1>
                <p>i have worked so far</p>
            </div>
            <div className='proj-rrow'>
                 {projects.map((proj, index) => (
        <ProjectCard key={index} project={proj} />
      ))}
      </div>
        </div>
    )
};

export default ProjectSection;