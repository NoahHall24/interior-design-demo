'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: 'Residential'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Transform Your Space, Elevate Your Life
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to turn your design dreams into reality? Our award-winning team is just a message away. 
            Whether you're reimagining your home or revolutionizing your business space, we're here to 
            bring your vision to life with unparalleled expertise and attention to detail.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-800 focus:border-transparent"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-slate-800 text-white font-medium py-3 px-4 rounded-md hover:bg-slate-700 transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Additional Image Below the Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full h-[220px] rounded-lg overflow-hidden mb-8 shadow-lg"
            >
              <Image
                src="/images/swiper1.jpg" // Replace with your actual image path
                alt="Contact Us Visual Representation"
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
            </motion.div>

          </div>

          {/* Right Column with Additional Information */}
          <div className="lg:w-1/2 space-y-8">
            {/* Why Choose Us Section */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Why Choose Us</h2>
              <ul className="space-y-4">
                {['Expert designers with years of experience', 'Tailored solutions for every project', 'Attention to detail and quality craftsmanship', 'Seamless project management'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-slate-800 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information Section */}
            <div className="bg-slate-800 text-white rounded-lg p-8">
              <h2 className="text-xl font-semibold mb-4">Contact Information:</h2>
              <p className="tracking-wide mb-1"><strong>Address:</strong> 123 Design Street, Creativity City, ST 12345</p>
              <p className="tracking-wide mb-1"><strong>Phone:</strong> (123) 456 -7890</p>
              <p className="tracking-wide mb-1"><strong>Email:</strong> info@yourcompany.com</p>
              <p className="tracking-wide mb-1"><strong>Hours:</strong> Mon-Fri: 9am - 6pm, Sat: 10am - 4pm</p>
            </div>

            {/* Our Process Section */}
            <div className='bg-white shadow-lg rounded-lg p-8'>
              <h2 className='text-xl font-semibold mb-4 text-slateblue'>Our Process</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold text-slateblue">Initial Consultation</h3>
                    <p className="text-gray-600">We discuss your vision, needs, and budget to establish the project scope.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold text-slateblue">Design Concept</h3>
                    <p className="text-gray-600">Our team creates initial design concepts based on your requirements.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold text-slateblue">Refinement</h3>
                    <p className="text-gray-600">We refine the chosen concept, incorporating your feedback.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold text-slateblue">Implementation</h3>
                    <p className="text-gray-600">We manage the entire implementation process, from sourcing to installation.</p>
                  </div>
                </li>
              </ol>
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;