import React from "react";

// image
import WomanImg from "../img/about/woman.png";

// import link
import { Link } from "react-router-dom";

// import motion
import { motion } from "framer-motion";

// import transition
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, }}
    animate={{ opacity: 1, }}
    exit={{ opacity: 0, }}
    transition={{ transition:transition1, duration:1.2 }}
    
    className="section">
      <div className="container mx-auto h-full relative">
        {/* text and image wrapper */}

        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <div
          
          className="flex-1 max-h-96 lg:pt-20 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <motion.img 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition:transition1, duration:1.2 }}
            className="h-[400px] lg:h-full" src={WomanImg} alt="" />
          </div>

          {/* text */}
          <motion.div
          initial={{ opacity: 0, y: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-50%' }}
          transition={{ transition:transition1, duration:1.2 }} 
          className="flex-1 pt-24 pb-10 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center  items-center lg:items-start lg:text-justify">
            <h1 className="h1">About me</h1>
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

            <Link to={"/portfolio"} className="btn">
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
