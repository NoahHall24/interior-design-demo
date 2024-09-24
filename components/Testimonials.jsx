'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Emily Thompson",
    role: "Homeowner",
    quote: "Lex Interiors transformed our house into a dream home. Their attention to detail and ability to capture our vision was truly remarkable.",
    image: "/images/profile-plh.svg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, Tech Innovations",
    quote: "The team at Lex Interiors brought a level of sophistication to our office space that perfectly reflects our company's ethos. Absolutely outstanding work.",
    image: "/images/profile-plh.svg"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Boutique Hotel Owner",
    quote: "Working with Lex Interiors was a game-changer for our hotel. They created spaces that our guests absolutely adore. The impact on our business has been significant.",
    image: "/images/profile-plh.svg"
  }
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div 
    className="bg-white p-8 rounded-lg shadow-lg relative transition-all duration-300 ease-in-out hover:shadow-xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ 
      y: -10,
      transition: { duration: 0.2 }
    }}
  >
    <FaQuoteLeft className="text-4xl text-[#708090] opacity-20 absolute top-4 left-4" />
    <p className="text-[#4A4A4A] text-lg mb-6 relative z-10">{testimonial.quote}</p>
    <div className="flex items-center">
      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
      <div>
        <h4 className="text-[#2C3E50] font-semibold">{testimonial.name}</h4>
        <p className="text-[#708090] text-sm">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

const TestimonialSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#F5F5F5] to-[#E0E0E0] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-light text-center text-[#2C3E50] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our <span className="text-[#708090] font-normal">Clients Say</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-[#5D6D7E] mb-16 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Discover why discerning clients choose Lex Interiors for their luxury design needs
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;