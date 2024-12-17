"use client";

import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      {/* Preload the video */}
      <Head>
        <link
          rel="preload"
          href="/hero-video.mp4"
          as="video"
          type="video/mp4"
        />
      </Head>

      <div className="relative w-full h-[50vh] lg:h-[100vh] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0">
            {/* Video background with a poster for fallback */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/fallback-image.jpg"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col space-y-3 lg:space-y-5 justify-center h-full text-center text-white bg-black bg-opacity-50 px-5">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-7xl font-bold mt-20 text-3xl"
          >
            Solar Panel Installer In Nigeria
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[0.8rem] md:text-lg max-w-3xl text-gray-100 mx-auto"
          >
            Power your home and business with reliable, sustainable energy
            solutions. Sungrid delivers innovative solar and electrical services
            to create a cleaner, greener future.
          </motion.p>
          <Link
            href="/about"
            className="mt-6 font-medium hover:scale-110 transition-all duration-300"
          >
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="px-4 py-2 md:px-8 md:py-3  sm:text-base md:text-lg text-white bg-blue-600 rounded-full hover:bg-blue-700"
            >
              Read More
            </motion.span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
