'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaStar } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: 'Residential'
  });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    { name: "Jane Doe", text: "Lex Interiors transformed our home beyond our wildest dreams!" },
    { name: "John Smith", text: "Working with this team was a joy. They truly understood our vision." },
    { name: "Emily Brown", text: "Our office space is now a true reflection of our brand." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C3E50] to-[#708090] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative">
        <motion.h1 
          className="text-5xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Bringing Your <span className="text-[#D4AF37] italic">Vision To Life</span>
        </motion.h1>
        <motion.h2
          className="text-xl max-w-4xl mx-auto text-lightgray font-light mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
        With meticulous attention to detail and a commitment to excellence, we ensure every project not only meets but exceeds your expectations. Let&apos;s connect and start designing the space of your dreams! 
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Let's Create Something Beautiful</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300"
                placeholder="Your Phone"
              />
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300"
              >
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Hospitality">Hospitality</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition duration-300"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
              <motion.button 
                type="submit" 
                className="w-full bg-[#D4AF37] text-[#2C3E50] py-3 rounded-lg font-bold text-lg hover:bg-white transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            className="relative h-[600px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Image 
              src="/images/contact3.jpg" 
              alt="Elegant Interior Design" 
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6"
                >
                  <p className="text-lg mb-4">"{testimonials[activeTestimonial].text}"</p>
                  <p className="font-semibold">- {testimonials[activeTestimonial].name}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#D4AF37]" />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-[#2C3E50] to-[#708090] text-white backdrop-filter backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-white border-opacity-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-4xl font-light mb-8 text-center">Elevate Your <span className="text-[#D4AF37]">Space</span></h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <motion.div 
              className="flex items-center bg-white bg-opacity-10 rounded-full px-6 py-3 transition-all duration-300 hover:bg-opacity-20"
              whileHover={{ scale: 1.05 }}
            >
              <FaMapMarkerAlt className="text-[#D4AF37] mr-3 text-2xl" />
              <span className="text-white">123 Design Street, Creativity City, ST 12345</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-white bg-opacity-10 rounded-full px-6 py-3 transition-all duration-300 hover:bg-opacity-20"
              whileHover={{ scale: 1.05 }}
            >
              <FaPhone className="text-[#D4AF37] mr-3 text-2xl" />
              <span className="text-white">(123) 456-7890</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-white bg-opacity-10 rounded-full px-6 py-3 transition-all duration-300 hover:bg-opacity-20"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope className="text-[#D4AF37] mr-3 text-2xl" />
              <span className="text-white">info@yourcompany.com</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-white bg-opacity-10 rounded-full px-6 py-3 transition-all duration-300 hover:bg-opacity-20"
              whileHover={{ scale: 1.05 }}
            >
              <FaClock className="text-[#D4AF37] mr-3 text-2xl" />
              <span className="text-white">Mon-Fri: 9am - 6pm, Sat: 10am - 4pm</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;