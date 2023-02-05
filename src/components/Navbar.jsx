import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex items-center p-5'>
      <img src='logo192.png' alt='' className='h-5 w-5'/>
      <div className=''>
        <NavLink to="/">Coaching</NavLink>
        <NavLink to="/">Programmes</NavLink>
        <NavLink to="/nutrition">Nutrition</NavLink>
        <NavLink to="/aboutme">About me</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
