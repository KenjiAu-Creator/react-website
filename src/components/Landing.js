import React from 'react'
import '../styles/landing.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'

const Landing = () => {
    return (
        <>
        <div className="landing">
            <p>Hey there!</p>
            <p>I'm Kenji Au, a full stack software engineer focused on API design.</p>
        </div>
        <div id="chevron-down">
            <FontAwesomeIcon icon={faChevronDown} size="4x"/>
        </div>
        </>
    )
}

export default Landing;