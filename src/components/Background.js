import React, {forwardRef, useRef} from 'react';
import '../styles/background.css';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'

const Background = () => {
    const background = useRef(null);

    const handleClick = () => {
        background.current.scrollIntoView({behavior: 'smooth'});
    }
    return (
        <>
        <div id="chevron-down">
            <FontAwesomeIcon onClick={handleClick} icon={faChevronDown} size="4x"/>
        </div>
        <div className="bg" id="background" ref={background}>
            <div className="section-title">
                <p>
                    BACKGROUND
                </p>
            </div>
            <div className="background-content">
                <p>
                    I'm currently a Software Developer at unTribe. I recently finished an accelerated application development course from the University of Alberta.
                </p>
                <p>
                    As a full stack developer, I find joy in solving problems that come up from bringing projects from ideation to production. My goal is to always build applications that are efficient under the hood while providing engaging user experiences.
                </p>
                <p>
                    When I'm not coding, I'm probably out snowboarding or bouldering!
                </p>
            </div>
        </div>
        </>
    )
}

export default Background;