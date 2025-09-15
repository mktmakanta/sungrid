"use client";

import { HandCoins, ShieldCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const ChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <ShieldCheck className="size-12" />, // Replace with appropriate icon or use a library like Heroicons
      title: "Quality Service",
      link: "/services",
      description:
        "We deliver top-notch solar and electrical solutions tailored to your needs, ensuring reliability, efficiency, and long-term satisfaction.",
    },
    {
      id: 2,
      icon: <UserCheck className="size-12" />, // Replace with appropriate icon
      title: "Expert Workers",
      link: "/about",
      description:
        "Our team of certified professionals brings years of experience and expertise to every project, guaranteeing precision and excellence.",
    },
    {
      id: 3,
      icon: <HandCoins className="size-12" />, // Replace with appropriate icon
      title: "Free Consultations",
      link: "/contact",
      description:
        "Get started with a free, no-obligation consultation to explore your energy options and find the perfect solution for your home or business.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-yellow-100/50 to-white  py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl font-bold mt-4"
        >
          Why Choose Us?
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-600 mt-4 max-w-4xl mx-auto"
        >
          Sungrid is dedicated to providing innovative energy solutions that
          empower homes and businesses. With a focus on sustainability and
          customer satisfaction, we ensure every project is handled with
          precision and care. Let us help you achieve a brighter, more
          energy-efficient future.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-orange-500 text-3xl  flex justify-center">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold mt-4">{reason.title}</h3>
              <p className="text-gray-600 mt-2 mb-5">{reason.description}</p>
              <Link
                href={reason.link}
                className="mt-4 text-orange-600 flex items-center hover:underline"
              >
                Learn More
                <span className="ml-1">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
