import React from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  return (
    <nav style={{backgroundColor: window.location.pathname === '/' ? 'black' : '#162E3B'}} className='flex items-center pt-5 pb-4 pr-40 pl-40 justify-between'>
      <img src='logo192.png' alt='' className='h-8 w-8 flex-none'/>
      <div className='text-white text-xl'>
        <NavLink to="/" className='pl-10'>Home</NavLink>
        <Link to="/#1on1coaching" className='pl-10'>Coaching</Link>
        <Link to="/#programmes" className='pl-10'>Programmes</Link>
        <NavLink to="/nutrition" className='pl-10'>Nutrition</NavLink>
        <NavLink to="/aboutme" className='pl-10'>About me</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
