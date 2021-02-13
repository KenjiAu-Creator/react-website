import React from 'react';
import '../styles/feature.css';

// Photo imports
import yummyLanding from '../images/YummyLanding.PNG';
import yummyMobile from '../images/YummyMobile2.PNG';
import shopLanding from '../images/ShopShop.PNG';
import shopMobile from '../images/ShopMobile.PNG';

const Feature = () => {
    return(
        <>
        <div className="feat" id="feature">
            <div className="section-title">
                FEATURED PROJECTS
            </div>
            <div className="feat-content">
                <div className="proj-point">
                    <div className="proj-photos">
                        <img id="yummyLanding" src={yummyLanding}/>
                        <img id="yummyMobile" src={yummyMobile}/>
                    </div>
                    <p className="feat-desc">
                        Yummy is a meal planning application built on .NET Core, React and Tailwind.css. Yummy allows users to create profiles and save recipes along with meal plans.
                    </p>
                    <div className="proj-buttons">
                        <a href="https://github.com/KenjiAu-Creator/YummyProject" target="_blank" className="button">Code</a>
                    </div>
                </div>
                <div className="proj-point">
                    <div className="proj-photos">
                        <img id="shopLanding" src={shopLanding}/>
                        <img id="shopMobile" src={shopMobile}/>
                    </div>
                    <p className="feat-desc">
                        An E-commerce site built around a charity theme. The application features an online store with products obtained through an external API. The application tracks products the user wishes to purchase with through a Redux state managed cart system.
                    </p>
                    <div className="proj-buttons">
                        <a href="https://kenjiau-creator.github.io/TECHCareers-React-Redux-Milestone/" target="_blank" className="button">Demo</a>
                        <a href="https://github.com/KenjiAu-Creator/TECHCareers-React-Redux-Milestone" target="_blank" className="button">Code</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Feature;