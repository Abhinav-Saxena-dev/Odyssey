import React from "react";

import Logo from './../../assets/Odyssey_logo.png'

const LandingPage = () => {
    return(
        <div class="w-full h-93vh relative flex justify-center items-center bg-landing">
            <div className="w-full h-4/6 flex justify-center items-center flex-col">
            <img src={Logo} alt="" className="w-2/12"/>
            <div className="title">
                ODYSSEY
            </div>
            <div className="text-teal-50 text-8xl">In Libris, Libertas</div>
            </div>
        </div>
    );
}

export default LandingPage;