import  React,{useRef} from "react";
import { motion, useScroll } from "framer-motion";
// import "./styles.css";

const Item = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-1/5 h-1/2 border-2 border-dotted relative border-black" ref={ref}>
        <figure className="sticky top-0 w-20 h-20 m-0 p-0">
          <svg className="rotate-[-90deg] translate-x-[-6rem]" id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="stroke-3 fill-none stroke-red-600 opacity-20" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-2 fill-none stroke-red-600"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
}

export default Item;