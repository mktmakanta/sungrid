"use client";

import { motion } from "framer-motion";

const team = [
  {
    name: "Emmy Rosum",
    role: "Customer Success Agent",
    img: "/images/team/team1.jpg",
  },
  {
    name: "Sophie Chamberlain",
    role: "Specialized Support",
    img: "/images/team/team2.jpg",
  },
  {
    name: "Lana Steiner",
    role: "VP of Customer Success",
    img: "/images/team/team3.jpg",
  },
  {
    name: "Orlando Diggs",
    role: "Customer Success Lead",
    img: "/images/team/team4.jpg",
  },
  {
    name: "Sasha Kindred",
    role: "Customer Success Lead",
    img: "/images/team/team5.jpg",
  },
  {
    name: "Chris Evans",
    role: "Customer Support Specialist",
    img: "/images/team/team6.jpg",
  },
  {
    name: "Taylor Swift",
    role: "Senior Customer Agent",
    img: "/images/team/team7.jpg",
  },
  {
    name: "John Doe",
    role: "Technical Support Lead",
    img: "/images/team/team8.jpg",
  },
];

export default function TeamSection() {
  return (
    <>
      <section className="py-5  px-5 bg-yellow-50 ">
        <div className=" mx-auto space-y-5 ">
          {/* Header Section */}
          <div className="text-center max-w-5xl mx-auto space-y-3 md:px-10 lg:px-20 mt-5">
            <h2 className="text-xl md:text-4xl font-bold ">
              We’ve got an <span className="text-blue-500">entire</span> team
              dedicated
              <br />
              to supporting you and your business
            </h2>
            <p className="text-slate-600 text-[0.8rem] md:text-lg">
              Get help 24/7, with our award-winning support network of payments
              experts.
            </p>
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
                  className="min-w-[200px] h-[350px] overflow-hidden "
                  key={index}
                >
                  <motion.div
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
                          <img
                            src="/icons/instagram.svg"
                            alt=""
                            className="size-full"
                          />
                        </div>
                        <div className="link size-5 rounded-full   flex justify-center items-center font-bold cursor-pointer">
                          <img
                            src="/icons/xtwitter.svg"
                            alt=""
                            className="size-full fill-white text-white"
                          />
                        </div>
                        <div className="link size-5 rounded-full   flex justify-center items-center font-bold cursor-pointer">
                          <img
                            src="/icons/whatsapp.svg"
                            alt=""
                            className="size-full"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
