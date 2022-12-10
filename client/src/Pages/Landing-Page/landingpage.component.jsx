import React from "react";

import LineWithLogo from "../../Components/LineWIthLogo/lineWtihLogo.component";
import Header from "../../Components/Header/header.component";
import Intro from "../../Components/Intro/intro.component";
import TagLineAnimation from "../../Components/Tagline-Animation/tagline-animation.component";

import {motion} from 'framer-motion';

import './landingpage.style.scss';
import { useState } from "react";
import { useEffect } from "react";

const LandingPage = () => {

    const [isClicked, setClick] = useState(false);

   useEffect(() => {
        const ht = window.innerHeight;
        window.scrollBy(0, ht)
   }, [isClicked])

    return (
        <div>
            {/* <Intro/> */}
            <div className="landing-page">
            <div className="header">
            <Header/>
            </div>
            <div className="decoration-logo">
                <LineWithLogo/>
            </div>
            <div className="title-container">
                    <motion.span
                    initial={{opacity : 0}}
                    animate={{opacity : 1}}
                    transition = {{duration : 2, ease : "easeInOut"}}
                     className="title">
                        ODYSSEY
                    </motion.span>
            </div>
            <div className="tagline-container">
                <TagLineAnimation/>            
            </div>
            <div className="scroll-button">
                <div className="button" onClick={() => setClick(true)}>
                    Click
                </div>
            </div>
        </div>
        {
            isClicked ?
                'Hello'
                :
                null
        }
        </div>
    );
}

export default LandingPage;