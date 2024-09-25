'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProcessStep = ({ number, title, description, image }) => {
  return (
    <motion.div 
      className="mb-16 last:mb-0 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:pr-8">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-16 h-16 bg-[#2C3E50] text-white rounded-full flex items-center justify-center z-10">
              <span className="text-2xl font-light">{number}</span>
            </div>
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover w-full h-[200px]"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-semibold text-[#2C3E50] mb-2">{title}</h3>
          <p className="text-[#708090] leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AboutProcess = () => {
  const steps = [
    { 
      title: "Visionary Consultation", 
      description: "We begin with an immersive discussion to understand your aspirations and lifestyle needs. This crucial step sets the foundation for a transformative collaboration.",
      image: "/images/swiper1.jpg" // Example image path
    },
    { 
      title: "Conceptual Artistry", 
      description: "Our expert team crafts bespoke design concepts tailored to your unique requirements. We blend innovative creativity with practical functionality.",
      image: "/images/swiper4.jpg" // Example image path
    },
    { 
      title: "Collaborative Refinement", 
      description: "We present our concepts and engage in a dynamic feedback process. This iterative journey allows us to fine-tune the design to reflect your vision.",
      image: "/images/swiper5.jpg" // Example image path
    },
    { 
      title: "Meticulous Realization", 
      description: "Once the design is perfected, we oversee the entire implementation process. From sourcing exquisite materials to coordinating skilled craftsmen.",
      image: "/images/swiper6.jpg" // Example image path
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20 md:py-32"> 
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-light mb-6 text-center text-[#2C3E50]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transform Your Space, <span className="font-semibold">Elevate Your Life</span>
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center text-[#708090] mb-12 font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Embark on a transformative journey with our visionary design process. 
          Discover how we bring your dreams to life through our meticulous approach.
        </motion.p>
        <div className="space-y-20">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} number={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;