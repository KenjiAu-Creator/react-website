import React from 'react'
import '../styles/header.css'

const Header = () => {
    return (
        <>
        <div id="header">
            <ul>
                <li className="header-choice">Background</li>
                <li className="header-choice">Experience</li>
                <li className="header-choice">Projects</li>
                <li className="header-choice">Contact</li>
                <li className="header-choice">Resume</li>
            </ul>
        </div>
        </>
    )
}

export default Header;