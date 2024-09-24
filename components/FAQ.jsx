'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="mb-6 border-b border-gray-200 pb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-light text-gray-800">{question}</span>
        <span className="text-[#D4AF37]">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-gray-600 font-light leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "How do we bring your vision to life?",
      answer: "Our process begins with an in-depth consultation to understand your aesthetic preferences, lifestyle needs, and project goals. We then create detailed design concepts, incorporating your feedback at every stage. Our expert team handles everything from space planning to material selection, ensuring a seamless journey from concept to reality."
    },
    {
      question: "What sets our design approach apart?",
      answer: "We believe in creating spaces that are not only visually stunning but also highly functional. Our designs blend timeless elegance with contemporary innovation, always keeping your unique story at the heart of our creative process. We leverage cutting-edge design tools and our extensive network of artisans to deliver truly bespoke interiors."
    },
    {
      question: "How do we ensure project success?",
      answer: "Communication and attention to detail are key. We maintain transparent, regular updates throughout the project. Our team of seasoned professionals meticulously manages every aspect, from budget tracking to timeline adherence. We also offer post-project support to ensure your complete satisfaction with your new space."
    },
    {
      question: "Can we accommodate sustainable design practices?",
      answer: "Absolutely. Sustainability is at the forefront of our design philosophy. We source eco-friendly materials, incorporate energy-efficient solutions, and prioritize longevity in our designs. Our team stays updated on the latest sustainable practices to ensure your space is as environmentally conscious as it is beautiful."
    },
    {
      question: "How do we handle challenges during the design process?",
      answer: "Our extensive experience allows us to anticipate and proactively address potential challenges. When unexpected issues arise, our problem-solving expertise comes into play. We present you with creative solutions, always keeping your vision and budget in mind, ensuring a smooth design journey."
    }
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-light text-gray-800 mb-6">Crafting Your Unique Space</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              At the heart of our design philosophy lies a commitment to creating spaces that are as unique as you are. Our expert team combines years of experience with cutting-edge design techniques to transform your vision into reality. We understand that every project is a journey, and we're here to guide you through each step with precision, creativity, and unparalleled attention to detail.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Explore our frequently asked questions to learn more about our process and how we can bring your dream space to life. Our goal is to make your design journey as smooth and enjoyable as possible, exceeding your expectations at every turn.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-300 mx-4"></div> {/* Vertical Divider */}

          {/* Right Column */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;