"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { certificationsData } from '@/lib/data';
import Certification from './certification';

export default function Certifs() {
  return (
    <section>
      <SectionHeading>Certifications</SectionHeading>
      <div className="flex flex-wrap justify-center"> {/* Flex container pour les certifications */}
        {certificationsData.map((certif, index) => (
          <Certification
            key={index}
            imageUrl={certif.imageUrl}
            altText={certif.altText}
          />
        ))}
      </div>
    </section>
  );
}
