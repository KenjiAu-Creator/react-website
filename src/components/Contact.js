import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import {FaLinkedin, FaEnvelope, FaGithub} from 'react-icons/fa'


const Contact = () => {
    return (
        <>
        <div>
            <h1>Contact</h1>
            <p>
                If you think we can create something or you have an opportunity please reach out! I am always looking for new opportunities. Please send me a message via email or LinkedIn. I will get back to you as fast as I can.
            </p>
            <div>
                <div><FaLinkedin /></div>
                <div><FaEnvelope /></div>
                <div><FaGithub /></div>
            </div>
        </div>
        </>
    )
}

export default Contact;