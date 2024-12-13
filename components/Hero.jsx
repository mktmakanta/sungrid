"use client";

import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[50vh] lg:h-[100vh] overflow-hidden ">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          {/* Video background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col space-y-3 lg:space-y-5 justify-center h-full text-center text-white  bg-black bg-opacity-50  px-5 ">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:text-7xl font-bold mt-20  text-3xl"
        >
          Solar Panel Installer In Nigeria
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className=" text-[0.8rem] md:text-lg max-w-3xl text-gray-300 mx-auto"
        >
          Power your home and business with reliable, sustainable energy
          solutions. Sungrid delivers innovative solar and electrical services
          to create a cleaner, greener future.
        </motion.p>
        <div className="mt-6 font-medium hover:scale-110 transition-all duration-300 ">
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="px-4 py-2 md:px-8 md:py-3 text-[1rem] sm:text-base md:text-lg  text-white bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Read More
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
