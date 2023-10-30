import React from "react";

// import images
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";

// import LInk
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";

// import transition
import { transition1 } from "../transitions";

const Portfolio = () => {
  return (
    <motion.section 
    initial={{ opacity: 0,y: '100%' }}
    animate={{ opacity: 1,y: 0 }}
    exit={{ opacity: 0,y: '100%'}}
    transition={{ transition:transition1, duration:1.2 }}
    className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 pb-10 lg:pt-36">
          {/* text */}
          <motion.div 
          initial={{ opacity: 0, y: '-90%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-90%' }}
          transition={{ transition:transition1, duration:1.2 }}
          className="flex flex-col lg:items-start">
            <h1 className="h1">Portfolio</h1>
            <p className="mb-10 max-w-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
              <br />
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting
            </p>

            <Link to={"/portfolio"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>
          {/* image grid */}
          <motion.div
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={{ transition:transition1, duration:1.2 }}
          className="grid grid-cols-2 lg:gap-2">
            {/* image */}
            <div className="max-w=[250px] lg:mx-w-[320px] h-[140px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w=[250px] lg:mx-w-[320px] h-[140px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w=[250px] lg:mx-w-[320px] h-[140px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-w=[250px] lg:mx-w-[320px] h-[140px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
