'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { TbArrowUpRight } from 'react-icons/tb';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <div className="bg-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-center text-[#4A4A4A] mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-[#708090] font-light">Lex Interiors</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-center text-[#6A6A6A] mb-12 sm:mb-16 md:mb-24 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Crafting bespoke luxury living spaces where design meets functionality.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image 
              src='/images/kitchen1.jpg'
              width={700}
              height={700}
              alt='Luxury Kitchen'
              className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-2xl'
            />
            <div className="absolute inset-0 bg-[#708090] opacity-20 rounded-lg"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#4A4A4A]">We Specialize in Creating <span className="text-[#708090] font-normal">Bespoke Luxury Living Spaces</span></h2>
            
            <p className="text-base sm:text-lg text-[#6A6A6A] leading-relaxed">
              At Lex Interiors, we believe that exceptional design is rooted in the harmony of quality, functionality, and timelessness. Our philosophy centers around creating living spaces that are not only beautiful but also practical and enduring.
            </p>
            
            <p className="text-base sm:text-lg text-[#6A6A6A] leading-relaxed">
              We understand that true luxury lies in the details. By selecting premium materials and expert craftsmanship, we create spaces that are visually stunning, durable, and functional.
            </p>
            
            <blockquote className="text-[#708090] text-xl sm:text-2xl italic leading-relaxed border-l-4 border-[#708090] pl-4 sm:pl-6 my-8 sm:my-12">
              "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
            </blockquote>
            <Link href='/portfolio'>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#5a6b7a' }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 sm:mt-8 bg-[#708090] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full flex items-center text-base sm:text-lg font-light transition duration-300"
              >
                Explore Our Portfolio <TbArrowUpRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;