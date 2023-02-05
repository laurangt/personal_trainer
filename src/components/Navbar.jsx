import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{backgroundColor: window.location.pathname === '/' ? 'black' : '#162E3B'}} className='flex items-center p-5 justify-between'>
      <img src='logo192.png' alt='' className='h-8 w-8 flex-none'/>
      <div className='text-white text-xl pr-16'>
        <NavLink to="/" className='p-10'>Home</NavLink>
        <NavLink to="/" className='p-10'>Coaching</NavLink>
        <NavLink to="/" className='p-10'>Programmes</NavLink>
        <NavLink to="/nutrition" className='p-10'>Nutrition</NavLink>
        <NavLink to="/aboutme" className='p-10'>About me</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
