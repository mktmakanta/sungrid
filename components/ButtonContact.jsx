import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ButtonContact = () => {
  return (
    <Link
      href="/contact"
      className={`relative overflow-hidden rounded-full border-2 border-transparent flex bg-blue-600 px-4 py-2 text-white font-medium  group`}
    >
      <span className="relative flex gap-1 items-center z-10 group-hover:text-blue-500 ">
        <span>Contact Us</span>{" "}
        <ArrowRight className="size-4 group-hover:translate-x-1" />
      </span>{" "}
      <span
        className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-in-out group-hover:translate-x-0  "
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%)",
        }}
      />
    </Link>
  );
};

export default ButtonContact;
