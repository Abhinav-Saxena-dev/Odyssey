import React from "react";
import MemberCard from "../../Components/member-card/membercard.component";

const MemberSection = () => {
    return(
        <div className="w-screen h-screen flex flex-col justify-around">
            <div className="w-full flex justify-center items-center">
                <h1 className="font-bold text-5xl">OUR TEAM</h1>
            </div>
            <div className="h-5/6 flex flex-wrap justify-around">
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
            </div>
        </div>
    );
}

export default MemberSection;