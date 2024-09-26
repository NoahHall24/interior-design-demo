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
  const mobileLeftImageX = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "-150%"]);
  const mobileRightImageX = useTransform(scrollYProgress, [0.2, 0.5], ["0%", "150%"]);
  const imageScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const imageRotate = useTransform(scrollYProgress, [0.2, 0.5], [5, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.6], ["50px", "0px"]);
  const textScale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);

  return (
    <section ref={sectionRef} className="min-h-[60vh] md:min-h-screen flex items-center justify-center relative overflow-hidden py-6 md:py-0">
      <motion.div 
        className="absolute w-2/5 h-[50vh] left-[30%] z-30 md:block hidden"
        style={{ x: leftImageX, scale: imageScale, rotate: imageRotate }}
      >
        <div className="relative w-full h-full">
          <Image
            src={project.image1}
            alt={`${project.title} - Image 1`}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </motion.div>
      <motion.div 
        className="absolute w-1/2 h-[30vh] left-1/4 z-30 md:hidden block"
        style={{ x: mobileLeftImageX, scale: imageScale, rotate: imageRotate }}
      >
        <div className="relative w-full h-full">
          <Image
            src={project.image1}
            alt={`${project.title} - Image 1`}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </motion.div>
      <motion.div 
        className="absolute w-2/5 h-[50vh] left-[30%] z-30 md:block hidden"
        style={{ x: rightImageX, scale: imageScale, rotate: imageRotate }}
      >
        <div className="relative w-full h-full">
          <Image
            src={project.image2}
            alt={`${project.title} - Image 2`}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </motion.div>
      <motion.div 
        className="absolute w-1/2 h-[30vh] right-1/4 z-30 md:hidden block"
        style={{ x: mobileRightImageX, scale: imageScale, rotate: imageRotate }}
      >
        <div className="relative w-full h-full">
          <Image
            src={project.image2}
            alt={`${project.title} - Image 2`}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </motion.div>
      <motion.div 
        className="relative z-20 text-center text-slateblue px-4 max-w-[90%] md:max-w-xl"
        style={{ opacity: textOpacity, y: textY, scale: textScale }}
      >
        <h2 className="text-xl md:text-3xl font-light mb-2 md:mb-4">{project.title}</h2>
        <p className="text-sm md:text-lg text-slategray mb-2 md:mb-4">{project.category}</p>
        <p className="text-xs md:text-sm mb-3 md:mb-6 text-slategray">{project.description}</p>
        <Link href={`/portfolio/${project.id}`} className="inline-block bg-slateblue text-white px-3 md:px-6 py-1 md:py-2 rounded-full font-semibold hover:bg-opacity-80 transition-colors duration-300 text-sm md:text-base">
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
    <div className="bg-gradient-to-b from-[#F5F5F5] to-[#E0E0E0] text-slategray pt-20"> {/* Increased top padding */}
      <div className="container mx-auto px-4 py-10">
        <h1 className="lg:text-6xl text-4xl font-thin mb-4  text-center">
          Our <span className="text-[#708090] font-semibold">Masterpieces</span>
        </h1>
        <h2 className="text-lg lg:text-xl font-light mb-10 text-center text-[#6A6A6A] max-w-3xl mx-auto leading-8">
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