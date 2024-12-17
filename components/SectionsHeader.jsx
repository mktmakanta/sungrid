import React from "react";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "./Breadcrumb";

const SectionsHeader = ({ text, image }) => {
  return (
    <div className="relative h-[250px] md:h-[400px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/sections/${image}.jpg')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10 flex flex-col justify-start h-full p-8 text-white">
        <div>
          <Link href="/">
            <Button className="bg-black/20 ring-2 ring-slate-800/40 hover:bg-blue-600 focus-visible:outline-2">
              <MoveLeft />
            </Button>
          </Link>
        </div>
        <div className="">
          <h1 className="text-4xl lg:text-7xl font-bold absolute top-1/2">
            {text}
          </h1>
        </div>
      </div>
      <Breadcrumb text={text} />
    </div>
  );
};

export default SectionsHeader;
