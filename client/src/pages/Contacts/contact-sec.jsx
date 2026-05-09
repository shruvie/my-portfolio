import React,{useState,useEffect} from 'react';
import './contact-sec.css';

function Contactsec(){

    const [formData, setFormData] = useState({ cont: '', mail: '', msg: '' });
    const [sent, setsent] =useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async() => {
        const res= await fetch("http://localhost:5000/contacts",{
            method : 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body : JSON.stringify({
                Contactno : formData.cont,
                Email : formData.mail,
                Message : formData.msg
            })
        })

        const data = await res.json();
        setsent(true);
        setStatus('Message Sent Successfully');
        setFormData({cont:'',mail:'',msg:''});

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
        <div className='form-wrapper' >
            <div className='corner tl'></div>
            <div className='corner tr'></div>
            <div className='corner bl'></div>
            <div className='corner br'></div>
            <div className='mylove'>
                <h6 className='title'>Contact form</h6>
                <div className='formin'>
                    <form>
                        <div className='inp-grp'>
    <input type='tel' id='cont' onChange={handleChange} value={formData.cont} placeholder=' ' />
    <label htmlFor='cont'>Contact No.</label>
</div>
<div className='inp-grp'>
    <input type='email' id='mail' value={formData.mail} onChange={handleChange} placeholder=' ' />
    <label htmlFor='mail'>Email</label>
</div>
<div className='inp-grp'>
    <input type='text' id='msg' value={formData.msg} onChange={handleChange} placeholder=' ' />
    <label htmlFor='msg'>Message</label>
</div>
{sent ?(<button className='but'>Message Sent!</button>
                    ):(<button className='but' type='button' onClick={handleSubmit}>Send Message</button>
                    )}</form>
                </div>
            </div>
        </div>
    </div>)
}

export default Contactsec;