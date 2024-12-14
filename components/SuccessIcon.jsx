"use client";

import React from "react";
import { motion } from "framer-motion";

const SuccessIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 161.62 161.62"
      className="w-24 h-24 p-3 "
    >
      <defs>
        <style>
          {`.cls-1{fill:#39b54a;}.cls-2{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:12px;}`}
        </style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle className="cls-1" cx="80.81" cy="80.81" r="60.81" />
          <motion.circle
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.5 }}
            transition={{
              duration: 2.2,
              ease: "easeOut",
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="cls-1"
            cx="80.81"
            cy="80.81"
            r="54.7"
          />
          <motion.polyline
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{
              duration: 1.3,
              delay: 0.2,
              ease: "easeInOut",
            }}
            className="cls-2"
            points="44.5 86.65 78.43 108.55 117.12 53.07"
          />
        </g>
      </g>
    </motion.svg>
  );
};

export default SuccessIcon;
