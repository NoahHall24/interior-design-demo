'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaEnvelope, FaQuoteLeft } from 'react-icons/fa';

const SocialIcon = ({ Icon, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D4AF37] transition-colors duration-300">
    <Icon size={20} />
  </a>
);

const DesignerCard = ({ name, role, image, linkedin, instagram, email, quote, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`relative overflow-hidden ${index % 2 === 0 ? 'md:col-span-3' : 'md:col-span-2'}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[50vh] cursor-pointer">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 transform hover:scale-110"
        />
        {/* Dark overlay for text visibility when not hovered */}
        <div className={`absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FaQuoteLeft className="text-[#D4AF37] text-3xl mb-3" />
              <p className="text-white text-center text-lg italic mb-4">{quote}</p>
              <div className="flex space-x-6">
                <SocialIcon Icon={FaLinkedinIn} href={linkedin} />
                <SocialIcon Icon={FaInstagram} href={instagram} />
                <SocialIcon Icon={FaEnvelope} href={`mailto:${email}`} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white bg-opacity-80">
          <h3 className="text-2xl font-light mb-1 text-gray-800">{name}</h3>
          <p className="text-sm uppercase tracking-wider text-gray-600">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const OurDesigners = () => {
  const designers = [
    { 
      name: "Emma Woodhouse", 
      role: "Senior Interior Designer", 
      image: "/images/profile1.jpg",
      linkedin: "https://linkedin.com/in/emmawoodhouse",
      instagram: "https://instagram.com/emmawoodhouse",
      email: "emma@lexinteriors.com",
      quote: "Design is not just what it looks like and feels like. Design is how it works."
    },
    { 
      name: "James Knightley", 
      role: "Architectural Specialist", 
      image: "/images/profile2.jpg",
      linkedin: "https://linkedin.com/in/jamesknightley",
      instagram: "https://instagram.com/jamesknightley",
      email: "james@lexinteriors.com",
      quote: "Architecture should speak of its time and place, but yearn for timelessness."
    },
    { 
      name: "Anne Taylor", 
      role: "Color & Texture Expert", 
      image: "/images/profile3.jpg",
      linkedin: "https://linkedin.com/in/annetaylor",
      instagram: "https://instagram.com/annetaylor",
      email: "anne@lexinteriors.com",
      quote: "The best rooms have something to say about the people who live in them."
    },
    { 
      name: "George Weston", 
      role: "Furniture Design Lead", 
      image: "/images/profile1.jpg",
      linkedin: "https://linkedin.com/in/georgeweston",
      instagram: "https://instagram.com/georgeweston",
      email: "george@lexinteriors.com",
      quote: "Furniture must have a personality as well as be beautiful."
    },
  ];

  return (
    <section className="bg-white py-16"> {/* Changed background to white */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-14">
        <motion.h2 
          className="text-5xl font-light mb-4 text-center text-gray-700" 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-[#D4AF37]">Visionary Designers</span>
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-600 mb-12 max-w-4xl mx-auto" 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our team of expert designers brings unparalleled creativity and expertise to every project, crafting breathtaking interiors that inspire and transform spaces into works of art.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {designers.map((designer, index) => (
            <DesignerCard key={designer.name} {...designer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDesigners;