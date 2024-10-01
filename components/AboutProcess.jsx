'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProcessStep = ({ number, title, description, image }) => {
  return (
    <motion.div 
      className="mb-12 sm:mb-16 last:mb-0 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div className="w-full md:w-1/3 mb-4 sm:mb-6 md:mb-0 md:pr-6 lg:pr-8">
          <div className="relative">
          <div className="absolute -left-1 sm:-left-3 -top-1 sm:-top-3 w-10 sm:w-14 h-10 sm:h-14 bg-[#2C3E50] text-white rounded-full flex items-center justify-center z-10">
            <span className="text-xl sm:text-2xl font-light leading-none mt-[-3px]">{number}</span>
          </div>
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover w-full h-[150px] sm:h-[200px]"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#2C3E50] mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-[#708090] leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AboutProcess = () => {
  const steps = [
    { 
      title: "Initial Consultation", 
      description: "We kick off our process with a personal consultation to dive into your vision. This is an opportunity for us to understand your needs, preferences, and lifestyle, ensuring we create a space that truly reflects you.",
      image: "/images/1process.jpg"
    },
    { 
      title: "Planning & Design", 
      description: "Next, we turn your ideas into a comprehensive design plan. Our team develops detailed layouts, selects materials, and curates color palettes, crafting a cohesive look that balances aesthetics and functionality.",
      image: "/images/2 process.jpg"
    },
    { 
      title: "Procurement & Implementation", 
      description: "Once the design is approved, we manage all procurement and logistics. Our experienced team coordinates with trusted vendors, ensuring a smooth implementation process and attention to detail at every step.",
      image: "/images/3process.jpg"
    },
    { 
      title: "Final Reveal & Follow-Up", 
      description: "Finally, we unveil your beautifully transformed space. This exciting moment showcases the culmination of our collaboration, ensuring that every detail aligns with your vision and exceeds your expectations.",
      image: "/images/4process.jpg"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 sm:py-20 md:py-32"> 
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-center text-[#2C3E50]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transform Your Space, <span className="font-semibold">Elevate Your Life</span>
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-center text-[#708090] mb-8 sm:mb-12 font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Embark on a transformative journey with our visionary design process. 
          Discover how we bring your dreams to life through our meticulous approach.
        </motion.p>
        <div className="space-y-12 sm:space-y-20">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} number={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;