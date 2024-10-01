'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone, FaQuoteLeft, FaClock } from 'react-icons/fa';
import Link from 'next/link';


const Footer = () => {
  
  const [activeQuote, setActiveQuote] = useState(0);



  

  const newQuotes = [
    { quote: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
    { quote: "Good design is like a refrigerator; when it works, no one notices, but when it doesn't, it sure stinks.", author: "Irene Au" },
    { quote: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
    { quote: "Your home should tell the story of who you are, and be a collection of what you love.", author: "Nate Berkus" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#2C3E50] to-[#1A2530] text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Logo and Social Media Column */}
          <div className="text-center md:text-left md:w-[30%]">
            <Link href="/">
            <motion.h2 
              className="text-4xl font-light mb-4 tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              LEX INTERIORS
            </motion.h2>
            </Link>
            <motion.p 
              className="text-sm tracking-wide leading-6 text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience the transformative difference with Lex Interiors—where your unique vision becomes a stunning reality. Contact us today!
            </motion.p>
            <motion.div 
              className="flex justify-center md:justify-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                { icon: <FaFacebookF size={20} />, label: "Facebook", href: "https://www.facebook.com/" },
                { icon: <FaInstagram size={20} />, label: "Instagram", href: "https://www.instagram.com/" },
                { icon: <FaPinterestP size={20} />, label: "Pinterest", href: "https://www.pinterest.com/" },
                { icon: <FaLinkedinIn size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/" }
              ].map(({ icon, label, href }) => (
                <motion.a 
                  key={label} 
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact Information Column */}
          <div className="text-center md:text-left md:w-[30%] ml-4">
            <motion.h3 
              className="text-xl font-light mb-4 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Connect with Us
            </motion.h3>
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration:.5 , delay:.4}}
            >
               {[
                { icon:<FaMapMarkerAlt/>, text:"123 Luxury Lane , Elegance City", href:"https://goo.gl/maps/123"},
                { icon:<FaEnvelope/>, text:"contact@lexinteriors.com", href:"mailto :contact@lexinteriors.com"},
                { icon:<FaPhone/>, text:"+1 (555) 123 -4567", href:"tel:+15551234567"},
                { icon:<FaClock/>, text:"Mon-Fri: 9am - 5pm", href:"#"}
               ].map(({icon,text ,href})=>(
                 <motion.a
                 key={text}
                 href={href}
                 className="flex items-center text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
                 >
                   <span className="mr-2">{icon}</span>
                   <span className="text-sm tracking-wide">{text}</span>
                 </motion.a>
               ))}
            </motion.div>
          </div>

          {/* Design Wisdom Quote Column */}
          <div className="text-center md:text-right md:w-[40%]">
            <motion.h3 
              className="text-xl font-light mb-4 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Design Wisdom
            </motion.h3>
            <motion.div 
              className="relative h-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration:.5 , delay:.4}}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuote}
                  initial={{ opacity: 0, y:-10 }}
                  animate={{ opacity :1 , y :0}}
                  exit={{opacity :0 , y:-10}}
                  transition= {{duration : .5}} 
                  className="absolute inset-0 flex flex-col items-end justify-center italic"
                >
                  <FaQuoteLeft className="text-[#D4AF37] absolute top-2 left-2" size={24} />
                  <p className="text-sm text-gray-300 px-2 text-right">{newQuotes[activeQuote].quote}</p>
                  <p className="text-xs text-[#D4AF37] mt-2 text-right">- {newQuotes[activeQuote].author}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <motion.button
              className="mt-4 text-[#D4AF37] text-sm hover:border-b border-[#D4AF37]"
              onClick={() => setActiveQuote((activeQuote + 1) % newQuotes.length)}
              whileHover={{ scaleX :1.05}}
            >
              Next Quote
            </motion.button>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright Section */}
        <motion.div 
          className="text-center text-sm text-gray-400"
          initial={{ opacity :0}}
          animate= {{opacity :1}}
          transition= {{delay : .6 , duration : .5}}
        >
          &copy; {new Date().getFullYear()} LEX INTERIORS. All rights reserved.
        </motion.div>

        {/* Tagline */}
        <motion.p 
          className="text-center text-xs text-gray-500 mt-2"
          initial={{opacity :0}}
          animate= {{opacity :1}}
          transition= {{delay : .8 , duration : .5}}
        >
          Elevating your lifestyle through exquisite design.
        </motion.p>
      </div>
    </footer>
   );
};

export default Footer;