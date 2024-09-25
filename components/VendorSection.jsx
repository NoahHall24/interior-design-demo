import Image from 'next/image'
import React from 'react'

const VendorSection = () => {
  return (
    <div className="bg-slateblue py-8 sm:py-10 md:py-14">
      <div className='mx-4 sm:mx-6'>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-6 sm:gap-8 md:gap-10">
          <div className="flex justify-center">
            <Image 
              src='/vendors/John-Richard-Logo.svg'
              width={150}
              height={75}
              alt="John Richard Logo"
              className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[300px]"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src='/vendors/Arhaus Logo Black.svg'
              width={150}
              height={75}
              alt="Arhaus Logo"
              className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[300px]"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src='/vendors/kw-logo-white.svg'
              width={150}
              height={75}
              alt="Kelly Wearstler Logo"
              className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[300px]"
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src='/vendors/fornasetti-white.svg'
              width={150}
              height={75}
              alt="Fornasetti Logo"
              className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[300px]"
            />
          </div>
          <div className="flex justify-center col-span-2 sm:col-span-3 lg:col-span-1">
            <Image 
              src='/vendors/ra-logo.svg'
              width={150}
              height={75}
              alt="Regina Andrew Logo"
              className="w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorSection