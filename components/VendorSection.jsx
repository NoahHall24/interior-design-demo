import Image from 'next/image'
import React from 'react'

const VendorSection = () => {
  return (
    <div className="bg-slateblue py-14">
      <div className='mx-6'>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-x-10">
          <Image 
            src='/vendors/John-Richard-Logo.svg'
            width={300}
            height={150}
            alt="John Richard Logo"
          />
          <Image 
            src='/vendors/Arhaus Logo Black.svg'
            width={300}
            height={150}
            alt="Arhaus Logo"
          />
          
          <Image 
            src='/vendors/kw-logo-white.svg'
            width={300}
            height={150}
            alt="Kelly Wearstler Logo"
          />
          <Image 
            src='/vendors/fornasetti-white.svg'
            width={300}
            height={150}
            alt="Fornasetti Logo"
          />
          <Image 
            src='/vendors/ra-logo.svg'
            width={300}
            height={150}
            alt="Regina Andrew Logo"
          />
          
        </div>
      </div>
    </div>
  )
}

export default VendorSection
