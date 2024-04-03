"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As a <span className="font-bold">final-year engineering student at ESIGELEC</span>, 
        specializing in <span className="font-bold">Big Data and Artificial Intelligence</span>, 
        I am actively seeking professional experiences that will complement my academic achievements. 
        I am eager to apply my <span className="font-bold">creativity, dynamism, and teamwork skills</span> in cutting-edge projects.
      </p>
      <p className="mb-3">
        I am deeply passionate about statistics, particularly in applying <span className="font-bold">statistical and probability theorems</span> to practical scenarios, 
        such as using Poisson's law for e-commerce user behavior prediction. My hobbies include <span className="font-bold">football, basketball, tennis, and table football</span>, 
        alongside a love for cooking, cinema, and exploring new technologies.
      </p>
    </motion.section>
  );
}