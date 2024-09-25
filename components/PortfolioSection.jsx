'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectReveal = ({ project }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const leftImageX = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "-100%"]);
  const rightImageX = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "100%"]);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const imageRotate = useTransform(scrollYProgress, [0.2, 0.5], [5, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.6], ["50px", "0px"]);
  const textScale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden mb-24">
      <motion.div 
        className="absolute w-1/3 h-2/3 left-1/3 z-10"
        style={{ x: leftImageX, scale: imageScale, rotate: imageRotate }}
      >
        <Image
          src={project.image1}
          alt={`${project.title} - Image 1`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-2xl"
        />
      </motion.div>
      <motion.div 
        className="absolute w-1/3 h-2/3 left-1/3 z-10"
        style={{ x: rightImageX, scale: imageScale, rotate: imageRotate }}
      >
        <Image
          src={project.image2}
          alt={`${project.title} - Image 2`}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-2xl"
        />
      </motion.div>
      <motion.div 
        className="relative z-20 text-center text-white px-4 max-w-xl"
        style={{ opacity: textOpacity, y: textY, scale: textScale }}
      >
        <h2 className="text-3xl font-light mb-4">{project.title}</h2>
        <p className="text-lg text-[#D4AF37] mb-4">{project.category}</p>
        <p className="text-sm mb-6">{project.description}</p>
        <Link href={`/portfolio/${project.id}`} className="inline-block bg-[#D4AF37] text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors duration-300">
          View Project
        </Link>
      </motion.div>
    </section>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      id: 'project1',
      title: "Opulent Penthouse",
      category: "Residential",
      image1: "/images/swiper1.jpg",
      image2: "/images/swiper4.jpg",
      description: "A lavish penthouse with panoramic city views and bespoke furnishings."
    },
    {
      id: 'project1',
      title: "Avant-Garde Office",
      category: "Commercial",
      image1: "/images/swiper1.jpg",
      image2: "/images/swiper4.jpg",
      description: "A cutting-edge workspace blending functionality with artistic flair."
    },
    {
      id: 'project1',
      title: "Luxe Boutique Hotel",
      category: "Hospitality",
      image1: "/images/swiper1.jpg",
      image2: "/images/swiper4.jpg",
      description: "An exclusive boutique hotel offering unparalleled luxury and personalized experiences."
    },
  ];

  return (
    <div className="bg-gray-900 text-white pt-32"> {/* Increased top padding */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-light mb-4 text-center">
          Our <span className="text-[#D4AF37] font-semibold">Masterpieces</span>
        </h1>
        <h2 className="text-2xl font-light mb-16 text-center text-gray-400">
          Discover our collection of exquisite interior designs, where every project is a testament to our meticulous attention to detail and commitment to transforming spaces into stunning works of art. From concept to completion, we ensure that each element reflects your unique vision and enhances the overall aesthetic.
        </h2>
      </div>
      {projects.map(project => (
        <ProjectReveal key={project.id} project={project} />
      ))}
    </div>
  );
};

export default PortfolioSection;