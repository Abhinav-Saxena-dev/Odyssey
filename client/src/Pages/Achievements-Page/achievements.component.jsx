import React from "react";
import Item from "../../Components/Scroll-List/scroll-list.component";

const Achievements = () => {
    return(
        <div className="w-screen bg-black">
            <div className="w-screen h-56 flex justify-center items-center">
                <h1 className="text-white text-5xl">TIMES WE MANAGED NOT TO FAIL</h1>
            </div>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    );
}

export default Achievements;