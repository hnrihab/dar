import { motion } from "framer-motion";
import React from "react";

const fadeInVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
    },
  }),
};

type fadeInTypes = {
  children: React.ReactNode;
  i: number;
};

const FadeIn = ({ children, i }: fadeInTypes) => {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: false,
      }}
      custom={i}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
