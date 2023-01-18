import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SessionView = () => {
  const [value, setValue] = useState(``);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div count = "01" className="sm:w-[38%] w-11/12 sm:h-[80%] h-[70%] rounded-xl relative
                    bg-[url('https://images.unsplash.com/photo-1615800098746-73af8261e3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80')] 
                    shadow-xl shadow-gray-400 flex items-center flex-col
                    before:content-[attr(count)] before:absolute before:left-[-150px] before:top-20 before:text-8xl before:font-moon
                    ">
        <div className="w-11/12 h-2/5 pt-5 flex flex-col justify-around">
          <h1 className="font-shadows font-bold">SESSION TYPE : OFFLINE</h1>
          <h1 className="font-shadows font-bold">DATE : 22 November, 2022</h1>
          <h1 className="font-shadows font-bold">PRESIDED OVER BY : Shreyansh Tiwari</h1>
          <h1 className="font-shadows font-bold">SESSION TAG : PPT Presentation</h1>
          <h1 className="font-shadows font-bold">SESSION FOCUS : Speaking and Presentation Skill</h1>
          <h1 className="font-shadows font-bold">DESCRIPTION : </h1>
        </div>
        <ReactQuill
          theme="bubble"
          value={value}
          readOnly={true}
          className="w-11/12 h-1/2 font-shadows"
        />
        <div className="w-11/12 h-[10%] font-shadows font-bold">WRITTEN BY : </div>
      </div>
    </div>
  );
};

export default SessionView;
