'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const HomeSection = () => {
  return (
    <div className="bg-white h-[85vh] pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-7xl font-extralight text-[#2C3E50]">
              Redefining <br />
              <span className="text-[#708090] font-light">Luxury Living</span>
            </h1>
            <p className="text-xl text-[#5D6D7E] font-light max-w-xl">
              Experience the art of bespoke interior design, where every detail is meticulously crafted to reflect your unique style and elevate your living space.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#5a6b7a' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#708090] text-white px-10 py-4 rounded-full text-lg font-light transition duration-300 flex items-center space-x-2"
            >
              <span>Explore Our Portfolio</span>
              <FiArrowRight />
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-full h-[60vh] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 border-8 border-[#708090] opacity-20 z-10"></div>
              <Image
                src="/images/swiper1.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="Luxury Interior Design"
                className="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="bg-white bg-opacity-95 p-6 rounded-xl shadow-lg backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-light text-[#2C3E50] mb-2">Tailored Elegance</h3>
                  <p className="text-[#5D6D7E]">Where your vision meets our expertise</p>
                </motion.div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#708090] rounded-tl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#708090] rounded-br-3xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;