"use client";

import { Columns2, HousePlug, Rows2, UtilityPole } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Services() {
  return (
    <section className="px-5 mt-8 md:mt-12 py-4 max-w-7xl mx-auto space-y-8">
      <div className="text-center  space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-600">
          Discover how we deliver quality services tailored to your needs,
          ensuring top-notch installations and reliable solutions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-stretch space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="h-[400px] w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center"
          >
            <Image
              src="/images/omi-back.jpg"
              alt="Main Service"
              width={800}
              height={800}
              quality={100}
              className="object-cover scale-110 w-full h-full"
            />
          </motion.div>
        </div>

        <div className="flex-1 flex flex-col justify-between space-y-4 xl:pt-7  ">
          {/* Description Paragraph */}
          <p className="text-gray-600 text-sm xl:text-lg leading-relaxed">
            Our team of experts offers exceptional services in solar,
            electrical, and general works, ensuring reliability, efficiency, and
            top-tier quality for all your projects.
          </p>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-start space-x-4">
              <div className="p-2 text-slate-200 rounded-md bg-blue-500">
                {" "}
                <Columns2 className="size-10" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Solar Installation</h3>
                <p className="text-gray-600 text-sm">
                  Expert solar installations for energy-efficient solutions.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-start space-x-4"
            >
              <div className="p-2 text-slate-200 rounded-md bg-blue-500">
                {" "}
                <UtilityPole className="size-10" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Electrical Installation
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive electrical services for homes and businesses.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-start space-x-4"
            >
              <div className="p-2 text-slate-200 rounded-md bg-blue-500">
                {" "}
                <HousePlug className="size-10" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">General Works</h3>
                <p className="text-gray-600 text-sm">
                  Reliable maintenance and repairs for all your needs.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <Link
            href="/services"
            className="text-blue-500 hover:scale-110 origin-left font-medium inline-block mt-4"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
