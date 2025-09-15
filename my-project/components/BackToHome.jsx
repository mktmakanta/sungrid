import { MoveUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const BackToHome = () => {
  return (
    <Link
      href="#"
      className="size-12  flex justify-center items-center hover:scale-125 transition-all duration-300 shadow-white/40 shadow-md fixed z-40 bottom-8 right-4 rounded-full bg-blue-500"
    >
      <MoveUp className="text-white font-semibold " />
    </Link>
  );
};

export default BackToHome;
