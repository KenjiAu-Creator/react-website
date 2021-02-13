import React from 'react';
import '../styles/experience.css';

const Experience = () => {
    return (
        <>
        <div className="exp" id="experience">
            <div className="section-title">
                EXPERIENCE
            </div>
            <div className="content">
                <div className="exp-block">
                    <div className="exp-title">
                        <span className="company">unTribe</span>
                        <span>Software Developer</span>
                    </div>
                    <div className="exp-time">
                        <span>Dec. 2020 - Present</span>
                    </div>
                </div>
                <div className="exp-block">
                    <div className="exp-title">
                        <span className="company">Dream Tea House</span>
                        <span>Supervisor</span>
                    </div>
                    <div className="exp-time">
                        <span>Mar. 2020 - Dec. 2020</span>
                    </div>
                </div>
                <div className="exp-block">
                    <div className="exp-title">
                        <span className="company">Dream Tea House</span>
                        <span>Assistant Supervisor</span>
                    </div>
                    <div className="exp-time">
                        <span>May 2017 - Mar. 2020</span>
                    </div>
                </div>
                <div className="exp-block">
                    <div className="exp-title">
                        <span className="company">University of Alberta</span>
                        <span>Research Assistant</span>
                    </div>
                    <div className="exp-time">
                        <span>Sept. 2015 - Dec. 2015</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Experience;