'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 bg-[#2C3E50]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
        style={{ originY: '100%' }}
      />
      <motion.div
        className="fixed inset-0 z-50 bg-[#708090]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1], delay: 0.1 }}
        style={{ originY: '100%' }}
      />
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <motion.h1 
          className="text-4xl font-light text-[#2C3E50]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          LEX <span className="font-normal">INTERIORS</span>
        </motion.h1>
      </motion.div>
    </>
  );
};

export default Preloader;