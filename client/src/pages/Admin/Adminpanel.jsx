import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Adminpanel.css';
import Addcert from './components/certif/Addcertificate.jsx';
import AddProjects from './components/proj/Addproject.jsx';
import AddSkills from './components/skil/AddSkills.jsx'
import { FolderKanban, Award, Star} from 'lucide-react';
import Contactsec from './components/Contacts/contacts.jsx'
import {FaPaperPlane} from 'react-icons/fa';

function AdminPanel(){
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = React.useState('projects');
    return(
        <div className="admin-panel">

            <div className="Adminnav">
                <div>
                    
                <h4>Shruvie's Portfolio</h4>
                <div className='buti'>
                    <button className={`adminnavbut ${activeTab ==='projects' ? 'active': ''}`} onClick={() => setActiveTab('projects')}>
                    <FolderKanban className="folder" />Projects
                </button>
                <button className={`adminnavbut  ${activeTab ==='certificates' ? 'active': ''}`} onClick={() => setActiveTab('certificates')}>
                    <Award className="aw"/>Certificates
                </button>
                <button className={`adminnavbut ${activeTab ==='skills' ? 'active': ''}`} onClick={() => setActiveTab('skills')}>
                    <Star className="folder" />Skills
                    </button>
                <button className={`adminnavbut ${activeTab ==='contacts' ? 'active': ''}`} onClick={() => setActiveTab('contacts')}>
                    <FaPaperPlane className="folder" />Contacts
                    </button>

                    
                </div>
                <div>
                    
                </div>
                </div>

            </div>


            <div className="hello">
                {activeTab === 'projects' && <AddProjects />
                }
                {activeTab === 'certificates' && <Addcert />
                }
                {activeTab === 'skills' && <AddSkills />
                }
                {activeTab === 'contacts' && <Contactsec />
                }
            </div>
        </div>
    )
}

export default AdminPanel;