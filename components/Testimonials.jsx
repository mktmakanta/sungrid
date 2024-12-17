"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const testimonial = [
  {
    id: 1,
    quote:
      "I’m very happy with the service from Sungrid. The installation team was punctual and the system is performing well. There were a few minor hiccups with scheduling, but the team made sure to address all my concerns. It’s been a great investment for our home.",
    name: "Mr Motoni AYO",
    position: "Bluesporting Hotel and Suit",
    avatar: "/images/testimonies/motoni.jpg",
  },
  {
    id: 2,
    quote:
      "The team at Sungrid was fantastic. They explained everything clearly, and the solar panels are working perfectly.",
    name: "Mr John Friday",
    position: "Client",
    avatar: "/images/testimonies/john.jpg",
  },
  {
    id: 3,
    quote:
      "Sungrid was an absolute game-changer for us. From the initial consultation to the installation, the team was transparent about everything. Our new solar panels are performing great, and we’ve already noticed a drop in our electricity bill. Highly recommend their services!",
    name: "Mr Samuel Alaofin",
    position: "Eto'o Communications",
    avatar: "/images/testimonies/samuel.jpg",
  },
  {
    id: 4,
    quote:
      "We’ve been using Sungrid for our solar installation, and it was the best decision we made. The team was very professional, explained all the technical details, and were always available to answer questions. My energy  system has been running flawlessly.",
    name: "Miss Bukola",
    position: "Client",
    avatar: "/images/testimonies/bukola.jpg",
  },
  {
    id: 5,
    quote:
      "Good experience with Sungrid. The install was on time, but I had some questions about the monitoring app that took a bit to resolve.",
    name: "Miss Ibitoye",
    position: "Client",
    avatar: "/images/testimonies/ibitoye.jpg",
  },
  {
    id: 6,
    quote:
      "Sungrid Solutions gave us a seamless, user-friendly website that showcases our services perfectly. The team’s attention to detail and expertise made all the difference. Highly recommended!",
    name: "Mr Guzmok",
    position: "Pascal medicine Store",
    avatar: "/images/testimonies/gumzok.jpg",
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
            What Our Clients Are Saying About Their Solar Journey with Sungrid
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
                    <p className="text-lg text-gray-500 h-min">
                      {testimonial.quote}
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8">
                  <div className="w-full h-min mb-8 border-t-2 border-gray-200 border-dotted"></div>
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
