'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const links = [
  { path: '/about', name: "About"},
  { path: '/portfolio', name: "Portfolio"},
  { path: '/gallery', name: "Gallery"},
  { path: '/contact', name: "Contact"},
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-lg' : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-center gap-x-10">
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
          
          <Link href="/">
            <motion.span
              className="text-3xl font-extralight tracking-wider cursor-pointer mx-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              LEX <span className="text-[#708090] font-light">INTERIORS</span>
            </motion.span>
          </Link>
          
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
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;