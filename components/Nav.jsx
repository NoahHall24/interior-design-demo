'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';


const links = [
  { path: '/', name: "Home"},
  { path: '/about', name: "About"},
  { path: '/portfolio', name: "Portfolio"},
  { path: '/gallery', name: "Gallery"},
  { path: '/contact', name: "Contact"},
]



const Nav = ({ containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className="text-white hover:italic transition-all ease-in-out duration-200 uppercase"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
