'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaExpandArrowsAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Luxe Penthouse',
    description: 'A stunning penthouse with panoramic city views',
    image: '/images/gallery1.jpg',
    gallery: ['/images/gallery1.jpg', '/images/gallery2.jpg', '/images/gallery121.jpg']
  },
  {
    id: 2,
    title: 'Coastal Retreat',
    description: 'Serene beachfront villa with modern amenities',
    image: '/images/gallery2.jpg',
    gallery: ['/images/gallery2.jpg', '/images/kitchen1.jpg', '/images/living.jpg']
  },
  {
    id: 3,
    title: 'Urban Loft',
    description: 'Industrial chic meets comfort in this city loft',
    image: '/images/gallery121.jpg',
    gallery: ['/images/gallery121.jpg', '/images/swiper1.jpg', '/images/gallery1.jpg']
  },
  {
    id: 4,
    title: 'Country Estate',
    description: 'Expansive estate blending traditional and contemporary design',
    image: '/images/kitchen1.jpg',
    gallery: ['/images/kitchen1.jpg', '/images/living.jpg', '/images/gallery2.jpg']
  },
  {
    id: 5,
    title: 'Mountain Chalet',
    description: 'Cozy retreat nestled in the mountains',
    image: '/images/living.jpg',
    gallery: ['/images/living.jpg', '/images/gallery121.jpg', '/images/swiper1.jpg']
  },
  {
    id: 6,
    title: 'Minimalist Studio',
    description: 'Sleek and efficient urban living space',
    image: '/images/swiper1.jpg',
    gallery: ['/images/swiper1.jpg', '/images/gallery1.jpg', '/images/kitchen1.jpg']
  },
];

const RecentProjects = () => {
  const [columns, setColumns] = useState(3);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);


  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else setColumns(3);
    };

    window.addEventListener('resize', updateColumns);
    updateColumns();

    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const getColumnProjects = (columnIndex) => {
    return projects.filter((_, index) => index % columns === columnIndex);
  };

  const openLightbox = (project, index) => {
    setSelectedProject(project);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  
  
  return (
    <div className="bg-gradient-to-b from-[#F5F5F5] to-[#E0E0E0] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-6xl font-thin text-center text-[#4A4A4A] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Masterpieces of <span className="text-[#708090]">Design</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-[#6A6A6A] mb-20 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our curated gallery showcasing a selection of our recent projects, where exquisite design and thoughtful craftsmanship come together to create stunning interiors.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => openLightbox(project, 0)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-3xl font-light text-[#708090] mb-2 drop-shadow-lg">{project.title}</h3>
                <p className="text-sm text-white mb-4 drop-shadow">{project.description}</p>
                <FaExpandArrowsAlt className="text-[#708090] text-2xl mx-auto drop-shadow-lg" />
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={selectedProject.gallery.map(src => ({ src }))}
            index={lightboxIndex}
            render={{
              slide: ({ slide }) => (
                <motion.img
                  src={slide.src}
                  alt={selectedProject.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  style={{ maxHeight: '90vh', width: 'auto' }}
                />
              ),
            }}
            carousel={{
              finite: selectedProject.gallery.length <= 5,
            }}
            controller={{
              closeOnBackdropClick: true,
            }}
            styles={{
              container: { backgroundColor: "rgba(74, 74, 74, 0.95)" },
              root: { '--yarl__color_backdrop': 'rgba(74, 74, 74, 0.95)' },
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecentProjects;