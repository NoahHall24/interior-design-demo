'use client';

import AboutProcess from "@/components/AboutProcess";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import RecentProjects from "@/components/RecentProjects";
import TestimonialSection from "@/components/Testimonials";
import VendorSection from "@/components/VendorSection";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      <HeroSection />
      <VendorSection />
      <AboutSection />
      <AboutProcess />      
      <RecentProjects />
      <TestimonialSection />
      </motion.div>
    </>
  );
}
