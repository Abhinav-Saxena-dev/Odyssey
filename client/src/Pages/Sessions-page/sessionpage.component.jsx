import React from "react";
import ReactQuill from "react-quill";
import DropDown from "../../Components/Dropdown-men/dropdown.component";
import SessionView from "../../Components/SessionView/sessionView.component";

const SessionPage = () => {
    return(
        <div className="w-screen h-screen">
            <div className="h-[8%] w-screen flex justify-center items-end">
                <h1 className="text-sessionText text-center text-5xl font-nanum">OUR SESSIONS</h1>
            </div>
            <div className="w-screen sm:h-[8%] h-[12%] flex items-center justify-around">
            <div className="w-full sm:w-[35%] h-full sm:flex sm:items-center sm:justify-between">
                <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 text-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <DropDown/>
            </div>
            </div>
            <div className="w-full h-5/6 overflow-scroll">
                <SessionView/>
                <SessionView/>
                <SessionView/>
                <SessionView/>
                <SessionView/>
                <SessionView/>
            </div>
        </div>
    );
}

export default SessionPage;