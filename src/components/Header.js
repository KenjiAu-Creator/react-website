import React from 'react'
import '../styles/header.css'

const Header = () => {
    const background = document.getElementById('bg')
    const executeScroll = () => {
        background.scrollIntoView();
    }
    return (
        <>
        <div id="header">
            <ul>
                <li className="header-choice"><a href="#background">Background</a></li>
                <li className="header-choice"><a href="#experience">Experience</a></li>
                <li className="header-choice"><a href="#feature">Projects</a></li>
                <li className="header-choice">Contact</li>
            </ul>
        </div>
        </>
    )
}

export default Header;