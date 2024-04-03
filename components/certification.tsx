"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { certificationsData } from '@/lib/data';


type StaticImageData = {
    src: string;
  }
  
  type CertificationProps = (typeof certificationsData)[number];
  
  export default function Certification({ imageUrl, altText }: CertificationProps) {
    return (
      <motion.div
        className="inline-block m-4" // Marge entre les certifications
        whileHover={{ scale: 1.05 }} // Animation au survol
      >
        <Image
          src={imageUrl.src} 
          alt={altText}
          width={450} 
          height={450}
          className="object-cover" 
          layout="fixed" 
        />
      </motion.div>
    );
  }