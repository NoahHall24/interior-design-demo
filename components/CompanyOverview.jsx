'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CompanyOverview = () => {
  return (
    <section className="relative bg-[#F5F5F5] text-[#2C3E50] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight text-gray-500">
              Delivering <span className="text-[#2C3E50] font-normal">Exceptional</span> Design
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              At Lex Interiors, our commitment is to provide you with the highest quality design solutions. We blend creativity with functionality to create spaces that not only look stunning but also enhance your lifestyle.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Each project is tailored to reflect your vision and style. Our dedicated team works closely with you, ensuring every detail aligns with your expectations for a truly personalized experience.
            </p>
            <Link href='/contact'>
              <motion.button
                className="bg-[#2C3E50] text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold hover:bg-[#1A2530] transition duration-300 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Your Transformation
              </motion.button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/swiper4.jpg" // Replace with your image path
                alt="Luxurious interior design by Lex Interiors"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50] to-transparent opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;