import React from 'react';
import './AddSkils.css';
import { Star} from 'lucide-react';
import './AddSkils.css';

function AddSkills(){
    return (
        <div>
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
                <h4 className="proj-fol"><Star className='fol'/>Skills</h4>
                <h4 className="add">+ Add Skills</h4>
            </div>

        </div>
        </div>
    )
}
export default AddSkills;