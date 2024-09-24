'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaPalette, FaHammer, FaEye } from 'react-icons/fa';

const ProcessCard = ({ icon, title, description, delay }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="text-[#2C3E50] mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[#2C3E50]">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
);

const AboutProcess = () => {
  const steps = [
    { icon: <FaLightbulb size={40} />, title: "Discovery", description: "We begin with an in-depth consultation to understand your vision and lifestyle needs." },
    { icon: <FaPalette size={40} />, title: "Design", description: "Our team creates a tailored design concept that reflects your style and meets your functional requirements." },
    { icon: <FaHammer size={40} />, title: "Implementation", description: "We source high-quality materials and oversee the implementation process for a seamless transformation." },
    { icon: <FaEye size={40} />, title: "Reveal", description: "Experience the grand reveal of your beautifully designed space and enjoy ongoing support." }
  ];

  return (
    <section className="bg-gray-100 py-24"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-light mb-12 text-center text-[#2C3E50]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Design Journey
        </motion.h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#2C3E50] transform -translate-y-1/2"></div> {/* Slate blue timeline line */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <ProcessCard key={index} {...step} delay={0.2 * index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;