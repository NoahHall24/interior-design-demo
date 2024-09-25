'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const links = [
  { path: '/about', name: "About"},
  { path: '/portfolio', name: "Portfolio"},
  { path: '/gallery', name: "Gallery"},
  { path: '/contact', name: "Contact"},
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const lineVariants = {
    closed: (i) => ({
      rotate: 0,
      translateY: i === 0 ? -8 : i === 2 ? 8 : 0,
      opacity: 1
    }),
    open: (i) => ({
      rotate: i === 1 ? 0 : i === 0 ? 45 : -45,
      translateY: 0,
      opacity: i === 1 ? 0 : 1
    }),
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-lg' : 'py-5 bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between md:justify-center">
          <div className="hidden md:flex items-center space-x-8">
            {links.slice(0, 2).map((link) => (
              <Link key={link.path} href={link.path}>
                <motion.span
                  className={`text-base font-light tracking-wide ${
                    isScrolled ? 'text-[#2C3E50]' : 'text-white'
                  } hover:text-[#708090] transition-colors duration-300 cursor-pointer`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.name.toUpperCase()}
                </motion.span>
              </Link>
            ))}
          </div>
          
          <Link href="/">
            <motion.span
              className="text-3xl font-extralight tracking-wider cursor-pointer mx-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              LEX <span className="text-[#708090] font-light">INTERIORS</span>
            </motion.span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.slice(2).map((link) => (
              <Link key={link.path} href={link.path}>
                <motion.span
                  className={`text-base font-light tracking-wide ${
                    isScrolled ? 'text-[#2C3E50]' : 'text-white'
                  } hover:text-[#708090] transition-colors duration-300 cursor-pointer`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.name.toUpperCase()}
                </motion.span>
              </Link>
            ))}
          </div>

          <motion.button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center"
            onClick={toggleMenu}
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-6 h-0.5 bg-[#2C3E50] rounded-full absolute"
                variants={lineVariants}
                custom={i}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg"
          >
            {links.map((link) => (
              <Link key={link.path} href={link.path}>
                <motion.div
                  className="px-4 py-3 border-b border-gray-200 text-[#2C3E50] hover:bg-gray-100"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name.toUpperCase()}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;