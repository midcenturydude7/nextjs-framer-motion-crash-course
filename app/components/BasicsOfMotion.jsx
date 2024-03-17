"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BasicsOfMotion() {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <div>
      <motion.button
        className="example-button"
        onClick={() => setIsVisible(!isVisible)}
        layout>
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, 150, 0],
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
