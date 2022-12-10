import React,{useState} from "react";

import {motion} from 'framer-motion';

import './tagline-animation.style.scss'

const TagLineAnimation = () => {

    const [isHover, setHover] = useState(false);

    
    const handleHover = () =>{

        const line = document.querySelectorAll('.line-container-tag')
        const ball = document.querySelector('.ball')

        console.log(ball);
        
        setTimeout(() => {
            line[0].classList.add("remove")
            line[1].classList.add("remove")
        });

        setTimeout(() => {
           ball.classList.add('decrease-size') 
        }, 500)

        setTimeout(() => {
            setHover(true) 
         }, 1000)
    }
    
    return(
        <div className="tagline-animation">
            {
                !isHover ?
                <div className="initial-container">
                    <div className="line-container-tag">
                        <div className="line"></div>
                    </div>
                    <div className="ball" onMouseEnter={handleHover}>
                    </div>
                    <div className="line-container-tag">
                        <div className="line"></div>
                    </div>
                </div>
            :
                <motion.div className="tagline">In Liberas, Libertas</motion.div>
            }
        </div>
    )
}

export default TagLineAnimation