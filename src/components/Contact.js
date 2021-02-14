import React from 'react';
import '../styles/contact.css';
import 'font-awesome/css/font-awesome.min.css';
import {FaLinkedin, FaEnvelope, FaGithub} from 'react-icons/fa'

const TriggerOutlook = () =>
{        

    var body = '';       

    var subject = "Message to Kenji Au";

    window.location.href = "mailto:?body="+body+"&subject="+subject;               

}   
const Contact = () => {
    return (
        <>
        <div className="contact" id="contact-section">
            <p className="contact-title">Get In Touch</p>
            <p>
                If you think we can create something or you have an opportunity please reach out! I am always looking for new opportunities. Please send me a message via email or LinkedIn. I will get back to you as fast as I can.
            </p>
            <div className="icon-box">
                <div className="icon"><a className="icon-link" href="https://linkedIn.com/in/kenjiau-0123/" target="_blank"><FaLinkedin size="3em" /></a></div>
                <div className="icon" onClick={TriggerOutlook}><FaEnvelope size="3em" /></div>
                <div className="icon"><a className="icon-link" href="https://github.com/KenjiAu-Creator" target="_blank"><FaGithub size="3em" /></a></div>
            </div>
        </div>
        </>
    )
}

export default Contact;