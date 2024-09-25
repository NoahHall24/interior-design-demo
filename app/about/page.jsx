'use client'

import AboutProcess from '@/components/AboutProcess'
import CallToAction from '@/components/CallToAction'
import CompanyOverview from '@/components/CompanyOverview'
import FAQ from '@/components/FAQ'
import OurDesigners from '@/components/OurDesigners'
import TestimonialSection from '@/components/Testimonials'
import React from 'react'
import { motion } from 'framer-motion'


const page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      <CompanyOverview />
      <AboutProcess />
      <OurDesigners />
      <TestimonialSection />
      <CallToAction />
      <FAQ />
      </motion.div>
    </>
  )
}

export default page
