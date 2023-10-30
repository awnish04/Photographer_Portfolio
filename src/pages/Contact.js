import React from "react";

// import images
import WomanImg from "../img/contact/woman.png";

// import motion
import { motion } from "framer-motion";

// import transition
import { transition1 } from "../transitions";

const Contact = () => {
  return (
    <section
     
    
    className="section bg-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-24 gap-x-8 text-center lg:text-left">
          {/* text & form */}
          <motion.div 
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ transition:transition1, duration:1.2 }}
          className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">I would love to get sugestions from you.</p>
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your Message"
                />
                <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">Send it</button>
            </form>
          </motion.div>
          {/* image */}
          <motion.div 
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ transition:transition1, duration:1.5 }}
          className="lg:flex-1 flex-1 max-h-96 lg:pt-52 lg:max-h-max order-2 lg:order-none overflow-hidden  ">
            <img className="h-[400px] lg:h-full" src={WomanImg} alt=""/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
