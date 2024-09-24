'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
    <div className="bg-[#E4CFC0] py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-light text-center text-slate-800 mb-12">Our Recent Projects</h2>
      <div className="flex flex-wrap -mx-2">
        {[...Array(columns)].map((_, columnIndex) => (
          <div key={columnIndex} className="px-2 w-full sm:w-1/2 lg:w-1/3">
            {getColumnProjects(columnIndex).map((project) => (
              <motion.div
                key={project.id}
                className="mb-4 relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => openLightbox(project, 0)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 text-white opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-center">{project.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {selectedProject && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={selectedProject.gallery.map(src => ({ src }))}
          index={lightboxIndex}
          render={{
            slide: ({ slide }) => (
              <img src={slide.src} alt={selectedProject.title} style={{ maxHeight: '80vh', width: 'auto' }} />
            ),
          }}
          carousel={{
            finite: selectedProject.gallery.length <= 5,
          }}
          controller={{
            closeOnBackdropClick: true,
          }}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, .8)" },
          }}
        />
      )}
    </div>
  );
};

export default RecentProjects;