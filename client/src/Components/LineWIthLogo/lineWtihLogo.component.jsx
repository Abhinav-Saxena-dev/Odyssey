import React from "react";

import {ReactComponent as Logo} from '../../assets/4.1 crown.svg';

import './lineWithLogo.style.scss'

const LineWithLogo = () => {
    return(
        <div className="container">
            <div className="line-container">
            </div>
            <div className="logo-container">
                <Logo className="logo"/>
            </div>
            <div className="line-container">
            </div>
        </div>
    );
}

export default LineWithLogo;