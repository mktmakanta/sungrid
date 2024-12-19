"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";

const team = [
  {
    name: "Omishola Joshua Oluwaseun",
    role: "CEO Sungrid",
    img: "/images/team/omi.jpg",
  },
  {
    name: "Ocheje Jeremiah",
    role: "Technical Director 1",
    img: "/images/team/jerry.jpg",
  },
  {
    name: "Solomon Jibrin",
    role: "Technical Director 2",
    img: "/images/team/jibrin.jpg",
  },
  {
    name: "Omishola David Abayomi",
    role: "Human Resource",
    img: "/images/team/david.jpg",
  },
  {
    name: "Ibrahim Makanta",
    role: "Designer/Developer",
    img: "/images/team/makanta.jpg",
  },
  {
    name: "Soliu Ridwan OLADAPO",
    role: "Sales Manager",
    img: "/images/team/soliu.jpg",
  },
  {
    name: "Abdullahi Abdullahi Olaide",
    role: "Assistan Sales Manager",
    img: "/images/team/abdullahi.jpg",
  },
];

export default function TeamSection() {
  return (
    <>
      <section className="py-5  px-5 bg-yellow-50 ">
        <div className=" mx-auto space-y-5 ">
          {/* Header Section */}
          <div className="text-center max-w-5xl mx-auto space-y-3 md:px-10 lg:px-20 mt-5">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-xl md:text-4xl font-bold "
            >
              We’ve got an <span className="text-blue-500">entire</span> team
              dedicated
              <br />
              to supporting you and your business
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-slate-600 text-[0.8rem] md:text-lg"
            >
              Get help 24/7, with our award-winning support network of payments
              experts.
            </motion.p>
          </div>

          {/* Team Section*/}
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  py-4 ">
              {team.map((teamMember, index) => (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="min-w-[200px] h-[380px] overflow-hidden "
                  key={index}
                >
                  <div
                    className="w-full h-full relative hover:scale-125  overflow-hidden shadow-lg"
                    style={{
                      backgroundImage: `url(${teamMember.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 group bg-black  bg-opacity-25 hover:bg-opacity-70 flex flex-col justify-end hover:justify-center hover:items-center p-4 text-white">
                      <h3 className="  font-semibold text-lg group-hover:text-sm  ">
                        {teamMember.name}
                      </h3>
                      <p className="text-sm group-hover:text-[0.8rem]">
                        {teamMember.role}
                      </p>
                      <div className=" socials group-hover:flex hidden gap-2 mt-2 ">
                        <div className="link size-5 rounded-full   flex justify-center items-center font-bold cursor-pointer">
                          <FaInstagram className="text-2xl hover:scale-125 transition-all duration-200" />
                        </div>
                        <div className="link size-5 rounded-full   flex justify-center items-center font-bold cursor-pointer">
                          <FaTwitterSquare className="text-2xl hover:scale-125 transition-all duration-200" />
                        </div>
                        <div className="link size-5 rounded-full   flex justify-center items-center font-bold cursor-pointer">
                          <FaWhatsappSquare className="text-2xl hover:scale-125 transition-all duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
