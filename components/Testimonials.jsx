"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const testimonial = [
  {
    id: 1,
    quote:
      "Studying at WOC is fun, the curriculum is complete, the instructors are competent, and the assignments given are also relevant to the current scope of work.",
    name: "Resky Fernanda",
    position: "Product Designer at Tokopedia",
    avatar: "/images/hero1.jpg",
  },
  {
    id: 2,
    quote:
      "The learning experience at WOC was amazing! The instructors went above and beyond to help students grasp key concepts and improve their skills.",
    name: "Jane Doe",
    position: "Client",
    avatar: "/images/hero3.jpg",
  },
  {
    id: 3,
    quote:
      "Sungrid helped me advance in my career by offering relevant projects and hands-on training. I would highly recommend it to anyone looking to upskill.",
    name: "John Smith",
    position: "Data Scientist at Microsoft",
    avatar: "/images/hero2.jpg",
  },
  {
    id: 4,
    quote:
      "The learning experience at WOC was amazing! The instructors went above and beyond to help students grasp key concepts and improve their skills.",
    name: "Jane Doe",
    position: "Client",
    avatar: "/images/hero3.jpg",
  },
  {
    id: 5,
    quote:
      "Sungrid helped me advance in my career by offering relevant projects and hands-on training. I would highly recommend it to anyone looking to upskill.",
    name: "John Smith",
    position: "Data Scientist at Microsoft",
    avatar: "/images/hero2.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center p-6 mx-auto max-w-4xl">
          {" "}
          <h1 className=" text-3xl mb-4 font-semibold text-blue-500">
            Testimonials
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            culpa deserunt aliquam nostrum beatae possimus.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
          {testimonial.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col bg-white border border-gray-200 rounded-md"
            >
              <div className="flex flex-col justify-between flex-1 p-8">
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-800">{testimonial.quote}</p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                  <div className="flex items-center">
                    <Image
                      className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                      src={testimonial.avatar}
                      alt={testimonial.quote}
                      width={500}
                      height={500}
                      quality={100}
                    />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-gray-800 truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-base text-gray-500 truncate text-wrap">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
