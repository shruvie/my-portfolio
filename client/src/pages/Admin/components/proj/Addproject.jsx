import React ,{useState,useEffect} from 'react';
import { FolderKanban, Award} from 'lucide-react';
import './addpro.css'
import ProjectCard from '../../../../components/Project/project-card.jsx';
import AdminProjCard from './admin-proj-card.jsx';

function AddProjects(){
    const [projects,SetProjects]=useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/projects")
        .then(res=>res.json())
        .then(data=>{
      console.log(data); // 🔍 check this
      SetProjects(data);
    })
        .catch(err=>console.log(err));
    },[]);

    return(
        <>
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
                <h4 className="proj-fol"><FolderKanban className='fol'/>Projects</h4>
                <h4 className="add">+ Add Project</h4>
            </div>
            <div className='proj-row'>
                 {projects.map((proj, index) => (
        <AdminProjCard key={index} project={proj} />
      ))}
      </div>

        </div>
        </>
    )
};

export default AddProjects;