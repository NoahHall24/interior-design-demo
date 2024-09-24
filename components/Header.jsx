import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className="py-5 bg-slateblue">
      <div className="container mx-auto flex items-center justify-between">
        <div>Logo</div>
        <div>
          <Nav
            containerStyles="hidden lg:flex gap-x-8 items-center"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
