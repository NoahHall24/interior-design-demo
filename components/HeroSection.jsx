'use client';

import React from 'react';
import {Button} from './ui/Button';
import { TbArrowUpRight } from 'react-icons/tb';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="bg-lightcream">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-[90vh] gap-x-16">
          {/* left */}
          <div>
            <p className="text-brown font-medium italic text-xl">Lexington Design Firm</p>
            <h1 className="text-darkbrown text-5xl font-semibold mt-4 mb-8">Bespoke Interior Design Spaces</h1>
            <p className="text-slategray text-md leading-7">
              We believe that every space has the potential to inspire. Our team of experienced designers is dedicated to transforming your vision into reality, blending aesthetics with functionality to create environments that reflect your unique style and enhance your lifestyle. Whether you&apos;re looking to refresh a single room or undertake a complete renovation, we are here to guide you every step of the way.
            </p>
            <Button className="mt-12 text-white bg-slateblue px-9 py-6 text-md">Schedule Consultation <TbArrowUpRight className="ml-2 h-5 w-5" /></Button>
          </div>

          {/* right */}
          <div>
            <Image 
              src='/images/gallery121.jpg'
              width={700}
              height={700}
              alt='hero image'
              className='w-full rounded-xl'
            />
          </div>


        </div>
      </div>
    </div>
  )
}

export default HeroSection
