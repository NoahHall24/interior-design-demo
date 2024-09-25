'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ProjectPage = ({ project }) => {
  const projectData = {
    title: "Opulent Penthouse",
    location: "New York City",
    year: "2023",
    category: "Residential",
    description: "A luxurious penthouse that blends modern aesthetics with timeless elegance, offering panoramic views of the city skyline.",
    challenge: "The challenge was to create a space that felt both expansive and intimate, utilizing the abundant natural light while maintaining privacy.",
    solution: "We employed an open floor plan with strategic placement of custom-designed furniture and art pieces. Floor-to-ceiling windows were fitted with smart glass technology for privacy control.",
    features: [
      "Custom Italian marble flooring",
      "Bespoke lighting fixtures",
      "Smart home integration",
      "Rooftop garden and lounge area"
    ],
    images: [
      "/images/swiper1.jpg",
      "/images/swiper4.jpg",
      "/images/swiper6.jpg",
      "/images/swiper5.jpg"
    ],
    testimonial: {
      quote: "LEX Interiors transformed our space into a breathtaking sanctuary. Their attention to detail and innovative design solutions exceeded our expectations.",
      author: "John & Jane Doe"
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pt-24">
      <motion.div 
        className="container mx-auto px-4 py-16 max-w-7xl"
        initial="initial"
        animate="animate"
        variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div 
          className="relative mb-24 overflow-hidden rounded-3xl shadow-2xl"
          variants={fadeInUp}
        >
          <Image
            src={projectData.images[0]}
            alt={projectData.title}
            width={1920}
            height={1080}
            className="object-cover w-full h-[70vh]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="p-8 md:p-16 w-full bg-gradient-to-t from-black to-transparent">
              <h1 className="text-4xl md:text-6xl font-light mb-2 text-white">
                {projectData.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-300">
                <span>{projectData.location}</span>
                <span>•</span>
                <span>{projectData.year}</span>
                <span>•</span>
                <span>{projectData.category}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Project Overview</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">{projectData.description}</p>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">{projectData.challenge}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="sticky top-24">
              <Image
                src={projectData.images[1]}
                alt={`${projectData.title} - Image 2`}
                width={800}
                height={600}
                className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="md:col-span-2">
            <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
              <p className="leading-relaxed">{projectData.solution}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Features</h2>
            <ul className="space-y-4">
              {projectData.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-2xl mr-4 text-gray-400">0{index + 1}</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="sticky top-24">
              <Image
                src={projectData.images[2]}
                alt={`${projectData.title} - Image 3`}
                width={800}
                height={600}
                className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2 bg-white rounded-2xl shadow-lg p-8 mb-16 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-24 h-24 bg-gray-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-200 rounded-full translate-x-1/2 translate-y-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-semibold mb-4 text-gray-800">Client Testimonial</h2>
              <blockquote className="text-gray-600 italic mb-4 text-lg">"{projectData.testimonial.quote}"</blockquote>
              <p className="text-gray-800 font-medium">- {projectData.testimonial.author}</p>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="mt-16">
          <Image
            src={projectData.images[3]}
            alt={`${projectData.title} - Image 4`}
            width={1920}
            height={1080}
            className="rounded-2xl shadow-lg object-cover w-full h-[50vh]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;