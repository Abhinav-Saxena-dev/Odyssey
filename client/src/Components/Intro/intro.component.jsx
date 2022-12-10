import React from "react";
import { useEffect } from "react";

import './intro.style.scss';

const Intro = () => {

    useEffect(() => {

        window.scrollTo(0,0);
        const intro = document.querySelector('.half1');
        const half2 = document.querySelector('.half2');
        const line = document.querySelector('.center-line');
        const initial = document.querySelector('.initial');

        setTimeout(() => {
            initial.classList.add('fadeout')
        }, 500)

        setTimeout(() => {
            initial.style.display = "none";
            line.classList.add('active');
        }, 1200)
        
        setTimeout(() => {
            line.classList.remove('active');
            intro.style.left = '-51vw';
            half2.style.right = '-51vw';
        }, 2500)

    },[])

    return(
        <div>
            <div className="initial"></div>
            <div className="half1"></div>
            <div className="center-line"></div>
            <div className="half2"></div>
        </div>
    );
}

export default Intro;