import AboutProcess from '@/components/AboutProcess'
import CallToAction from '@/components/CallToAction'
import CompanyOverview from '@/components/CompanyOverview'
import FAQ from '@/components/FAQ'
import OurDesigners from '@/components/OurDesigners'
import TestimonialSection from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <>
      <CompanyOverview />
      <AboutProcess />
      <OurDesigners />
      <TestimonialSection />
      <CallToAction />
      <FAQ />
    </>
  )
}

export default page
