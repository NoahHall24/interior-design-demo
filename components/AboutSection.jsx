import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { TbArrowUpRight } from 'react-icons/tb'

const AboutSection = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-12">
        <h1 className="text-center text-5xl tracking-wider italic font-bold text-darkbrown">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-center gap-x-4 py-16">
          {/* left */}
          <div className="col-span-2">
            <Image 
              src='/images/kitchen1.jpg'
              width={700}
              height={700}
              alt='Living Room'
              className='w-full rounded-xl'
            />
          </div>

          {/* right */}
          
          <div className="col-span-3 ml-10">
            <h2 className="text-2xl lg:text-3xl text-slateblue mb-5 font-semibold">We Specialize in Creating Bespoke Luxury Living Spaces</h2>
            
                <h2 className="text-black">
                  At Lex Interiors, we believe that exceptional design is rooted in the harmony of quality, functionality, and timelessness. Our philosophy centers around the idea that your living spaces should not only be beautiful but also practical and enduring. We are dedicated to using only the highest quality furniture and materials, ensuring that every element we incorporate into your home stands the test of time.
                </h2>
                <p className="pt-4 text-black">
                We understand that true luxury lies in the details. By selecting premium materials and craftsmanship, we create spaces that are not only visually stunning but also durable and functional. Our commitment to excellence means that we never compromise on quality, allowing you to enjoy a home that reflects your style while meeting your everyday needs.
                </p>
                <p className="pt-4 text-black">
                Timeless design transcends trends, creating an atmosphere that feels both fresh and familiar. We strive to blend classic elegance with modern sensibilities, resulting in living spaces that are as inviting as they are sophisticated. We invite you to experience the perfect balance of beauty and practicality, where every piece is thoughtfully chosen to enhance your lifestyle.
                </p>
              
                <h3 className="text-slateblue text-xl italic leading-7 pt-8">Explore our portfolio to see how we&apos;ve transformed spaces for clients just like you, and let us help you bring your dream home to life. Welcome to Lex Interiors—where your vision becomes our mission.</h3>
              
            
            
            <Button 
              href='/portfolio'
              className="mt-12 text-white bg-slateblue px-9 py-6 text-md"
            >
              View Our Portfolio <TbArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default AboutSection
