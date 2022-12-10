import React from "react";

import {Link} from 'react-router-dom';

import './header.style.scss';

const Header = () => {
    return(
        <div className="header-container">
            <div className="links">
            <Link to="about" className="link">About</Link>
            <Link to="achievements" className="link">Our Achievements</Link>
            <Link to="session" className="link">Our Sessions</Link>
            <Link to="room" className="link">Room</Link>            
            </div>
        </div>
    );
}

export default Header;