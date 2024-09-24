'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <section className="bg-gray-200 py-16"> {/* Neutral background color */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-4xl font-semibold text-gray-800 mb-4" // Darker neutral tone for text
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Elevate Your Space?
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mb-8" // Softer tone for subheading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our dedicated team of designers is here to transform your vision into reality with elegance and precision. Let's create a space that reflects your unique style.
        </motion.p>
        <motion.a 
          href="/contact" // Link to your contact page or form
          className="inline-block bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          Schedule Your Consultation
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;