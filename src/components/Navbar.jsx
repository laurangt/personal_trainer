import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  return (
    <nav style={{backgroundColor: window.location.pathname === '/' ? 'transparent' : '#162E3B'}} className='flex items-center py-5 px-10 lg:px-40 justify-end'>
      <div className='text-xl text-white'>
        <NavLink to="/" className='pl-10'>Home</NavLink>
        <Link to="/#1on1coaching" className='pl-10'>Coaching</Link>
        <Link to="/#programs" className='pl-10'>Programs</Link>
        <NavLink to="/nutrition" className='pl-10'>Nutrition</NavLink>
        <NavLink to="/aboutme" className='pl-10'>About me</NavLink>
        <Link to="/#contact" className='pl-10'>Contact me</Link>
      </div>
    </nav>
  )
}

export default Navbar
