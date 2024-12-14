"use client";

import { Lightbulb } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-slate-100 py-2 lg:py-5">
      <div className="py-4 px-5 mt-10 space-y-5  max-w-7xl mx-auto ">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center space-y-3"
        >
          <h2 className="text-3xl font-bold text-orange-400">Get to know Us</h2>
          <p className="max-w-3xl mx-auto text-[0.9rem] text-gray-600 md:text-xl">
            Our mission is to help you embrace clean energy while ensuring
            reliability, efficiency, and a brighter future for all.
          </p>
        </motion.div>
        <div className="container mx-auto  flex flex-col md:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-3">
            <h2 className="text-lg sm:text-lg md:text-3xl font-bold text-gray-900 leading-tight">
              The Friendliest Installer in the South-West
            </h2>
            <p className=" text-gray-600 text-[0.9rem] sm:text-base leading-relaxed">
              At Sungrid, we are passionate about transforming the way energy
              powers your life. With a commitment to sustainability and
              innovation, we provide tailored solar and electrical solutions
              that meet your unique needs.
            </p>
            <ul className="space-y-2 md:text-xl font-semibold">
              {[
                "Collaborate with 100+ leading",
                "100+ leading universities and companies",
                "Leading universities and companies",
                "Universities and companies",
              ].map((item, index) => (
                <li key={index} className="flex items-start  text-gray-900">
                  <span className="text-orange-400 text-nowrap mr-2">{`0${
                    index + 1
                  } /`}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="relative md:w-1/2 flex justify-center">
            {/* Image */}
            <div className="w-full h-[300px] md:h-[400px] relative">
              <Image
                src="/images/sungrid3.png" // Replace with your image path
                width={1000}
                height={1000}
                quality={100}
                alt="Solar Panel on Green Globe"
                className="w-full h-full object-cover rounded-md shadow-md"
              />
            </div>

            <div className="absolute bottom-0 left-10 bg-orange-400 py-3 px-4 rounded-md shadow-lg transform translate-y-1/2">
              <div className="flex items-center gap-2">
                <div className="  rounded-full">
                  <Lightbulb className="w-12 h-12 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="text-sm sm:text-xl  font-semibold ">
                    The Piece That Sold Me On
                  </h3>
                  <p className="text-[0.9rem] ">This Polarizing Trend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
