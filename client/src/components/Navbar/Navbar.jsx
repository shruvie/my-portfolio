import React, {useState,useEffect} from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const [showpswrdbox, setShowPassword] = useState(false);
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');

    const SECRET ='Shruvzluvz@93';
    const navigate = useNavigate();

    const handleDoubleClick =()=> {
        setShowPassword(true);
    }
    const handlePasswordSubmit =(e)=>{
        if(Password===SECRET){
            setShowPassword(false);
            setError('');
            setPassword('');
            navigate('/adminpanel');
        }else{
            setError('Incorrect password. Please try again.');
            setPassword('');
        }
    }

  
const [visible, setVisible] = useState(true);
const [lastScroll, setLastScroll] = useState(0);

useEffect(() => {
    const handleScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll < lastScroll) {
            setVisible(true);  // scrolling UP → show
        } else {
            setVisible(false); // scrolling DOWN → hide
        }

        setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, [lastScroll]);
    return(
        <>
        <nav className={`navbar ${visible ? 'nav-visible' : 'nav-hidden'}`}>
            <h4 onDoubleClick={handleDoubleClick} style={{cursor:'pointer'}}>Shruti's Portfolio</h4>
            <ul className="navbar-links">
                <li> <a href="#Home">Home</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Projects">Projects</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Education">Education</a></li>
                <li><a href="#Contact Uss">Contact Us</a></li>
            </ul>
            <button className="navbar-button">Resume</button>
        </nav>
        {showpswrdbox && (
            <div className="password-modal" onClick={()=>{setPassword(''); setError('');setShowPassword(false);}}>
                <div className="password-box" onClick={(e) => e.stopPropagation()}>
                    <h2>Enter Password</h2>
                    <input type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoFocus/>
                    <button onClick={handlePasswordSubmit}>Submit</button>
                </div>
            </div>)}
        
        
        
        </>
    )
};

export default Navbar;