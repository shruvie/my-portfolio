import React,{useState,useEffect} from 'react';
import './contact-sec.css';

function Contactsec(){

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = () => {
        console.log(formData);
        // add your submit logic here
    };


    return (
    <div className='contact-sec'>
        <div className='main'>
            <h1>Contact Me.</h1>
            <div className='ok'>
                <div className='li'></div>
                <div className='details'>
                    <div>
                        <p>Contact No.</p>
                        <h4>+91 9318307546</h4>
                    </div>
                    <div>
                        <p>Email</p>
                        <h4>theshrutivrma@gmail.com</h4>
                    </div>
                    <div>
                        <p>Location</p>
                        <h4>Ghaziabad, Uttar Pradesh</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='form-wrapper'>
            <div className='corner tl'></div>
            <div className='corner tr'></div>
            <div className='corner bl'></div>
            <div className='corner br'></div>
            <form>
                <div className='inp-grp'>
                    <label htmlFor="cont">Contact No.</label>
                    <input type='tel' id="cont"></input>
                </div>
            </form>
        </div>
    </div>)
}

export default Contactsec;