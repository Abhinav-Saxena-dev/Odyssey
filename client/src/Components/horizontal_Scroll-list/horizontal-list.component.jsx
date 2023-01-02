import React,{ useRef } from "react";
import { motion, useScroll } from "framer-motion";

const HorizontalLine = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="relative top-o left-0 right-0 bottom-0 flex items-center h-screen w-screen m-0 p-0 bg-blue-600 pb-24">
      <svg className="absolute top-5 left-5 rotate-[-90deg]" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="stroke-2 fill-none stroke-white opacity-30" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-white strok-2 fill-none"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <ul className="flex list-none h-4/6 overflow-x-scroll py-5 px-0 flex-grow-0 flex-shrink-0 basis-2/5 my-0 mx-auto" ref={ref}>
        <li className="flex-grow-0 flex-shrink-0 basis-6/12 bg-white mt-0 mr-5 mb-0 ml-0 last-of-type:m-0"></li>
        <li className="flex-grow-0 flex-shrink-0 basis-6/12 bg-white mt-0 mr-5 mb-0 ml-0 last-of-type:m-0"></li>
        <li className="flex-grow-0 flex-shrink-0 basis-6/12 bg-white mt-0 mr-5 mb-0 ml-0 last-of-type:m-0"></li>
        <li className="flex-grow-0 flex-shrink-0 basis-6/12 bg-white mt-0 mr-5 mb-0 ml-0 last-of-type:m-0"></li>
      </ul>
    </div>
  );
}


export default HorizontalLine;