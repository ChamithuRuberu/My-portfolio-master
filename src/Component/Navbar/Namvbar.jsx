import React from 'react';
import './Navbar.css'
const Namvbar = () =>{
    return(
        <div className="nav-wrapper">
            <div className="n-left">
                <div className="n-name">Chamithu Dinsara</div>
                <span>Toggle</span>
            </div>

            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:"none"}}>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>CV</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact Me
                </button>
            </div>
        </div>
    )
};

export default Namvbar;