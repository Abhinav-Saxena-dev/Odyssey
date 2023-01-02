import React from "react";

import {motion} from 'framer-motion';

import ImageMember from './../../assets/Odyssey_logo.png'

const MemberCard = () => {
    return(
        <motion.div 
        whileHover={{scale : 1.1}}
        className="w-1/5 h-2/5 flex flex-col justify-between">
            <div className="w-full flex justify-center">
                <img src={ImageMember} alt="" className="ring-4 border w-1/2 rounded-full" />
            </div>
            <div className="flex justify-center items-center font-bold text-2xl">
                <h1>NANDINI AGGARWAL</h1>
            </div>
            <div className="flex justify-center items-center font-bold text-1xl">
                <h1>PRESIDENT</h1>
            </div>
        </motion.div>
    );
}

export default MemberCard;