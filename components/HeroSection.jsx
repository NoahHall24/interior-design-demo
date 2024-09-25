'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const HomeSection = () => {
  return (
    <div className="bg-[#f5f5f5] min-h-[85vh] py-12 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-[#2C3E50] leading-tight">
              Redefining <br />
              <span className="text-[#708090] font-light">Luxury Living</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#5D6D7E] font-light max-w-xl">
              Experience the art of bespoke interior design, where every detail is meticulously crafted to reflect your unique style and elevate your living space.
            </p>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#5a6b7a' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#708090] text-white px-6 sm:px-10 py-3 sm:py-4 mt-6 sm:mt-10 rounded-full text-base sm:text-lg font-light transition duration-300 flex items-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <FiArrowRight />
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 border-4 sm:border-8 border-[#708090] opacity-20 z-10"></div>
              <Image
                src="/images/swiper1.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Luxury Interior Design"
                className="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 z-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-white bg-opacity-95 p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-sm"
                >
                  <h3 className="text-xl sm:text-2xl font-light text-[#2C3E50] mb-1 sm:mb-2">Tailored Elegance</h3>
                  <p className="text-sm sm:text-base text-[#5D6D7E]">Where your vision meets our expertise</p>
                </motion.div>
              </div>
            </div>
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-24 sm:h-24 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-[#708090] rounded-tl-3xl"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-24 sm:h-24 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-[#708090] rounded-br-3xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;