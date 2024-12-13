import React from "react";

const Marquee = () => {
  return (
    <div className="flex items-center overflow-hidden text-white bg-orange-500 py-2 ">
      <div className=" whitespace-nowrap animate-marquee">
        <span className="text-4xl md:text-7xl font-bold">
          DESIGN THE NEWS &nbsp; DESIGN THE NEWS &nbsp; DESIGN THE NEWS &nbsp;
          MISSION: TO EMPOWER COMMUNITIES AND BUSINESSES &nbsp; WITH
          SUSTAINABLE, INNOVATIVE, AND EFFICIENT ENERGY SOLUTIONS, &nbsp;
          LEVERAGING SOLAR AND ELECTRICAL TECHNOLOGIES &nbsp; TO CREATE A
          BRIGHTER, CLEANER FUTURE FOR &nbsp; EVERYONE. &nbsp; VISION: TO BE A
          LEADING PROVIDER OF RENEWABLE &nbsp; ENERGY SOLUTIONS, TRANSFORMING
          THE &nbsp; WAY ENERGY IS HARNESSED AND UTILIZED, &nbsp; AND DRIVING
          GLOBAL PROGRESS &nbsp; TOWARDS A SUSTAINABLE AND ECO-FRIENDLY WORLD.
        </span>
      </div>
    </div>
  );
};

export default Marquee;
