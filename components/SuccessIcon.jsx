"use client";

import React from "react";
import { motion } from "framer-motion";

const SuccessIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 161.62 161.62"
      className="w-32 h-32 p-3 "
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
            // initial={{ scale: 1, opacity: 0 }}
            // whileInView={{ scale: 1.4, opacity: 1 }}
            // transition={{ duration: 0.8, ease: "easeOut" }}
            className="cls-1"
            cx="80.81"
            cy="80.81"
            r="54.7"
          />
          <polyline
            className="cls-2"
            points="44.5 86.65 78.43 108.55 117.12 53.07"
          />
        </g>
      </g>
    </motion.svg>
  );
};

export default SuccessIcon;
