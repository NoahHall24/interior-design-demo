import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = () => {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 bg-white"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="fixed inset-0 z-50 bg-[#2C3E50]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        style={{ originY: '100%' }}
      />
      <motion.div
        className="fixed inset-0 z-50 bg-[#708090]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.43, 0.13, 0.23, 0.96], 
          delay: 0.1 
        }}
        style={{ originY: '100%' }}
      />
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1 
          className="text-5xl font-light text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          LEX <span className="font-normal">INTERIORS</span>
        </motion.h1>
      </motion.div>
    </>
  );
};

export default PageTransition;