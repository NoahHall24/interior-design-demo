'use client'

import ContactPage from '@/components/ContactPage'
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
      <ContactPage />
      </motion.div>
    </>
  )
}

export default page
