import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    const fullNav = <>
      <div className='lg:text-xl text-white'>
        <NavLink to="/" className='pl-10'>Home</NavLink>
        <Link to="/#1on1coaching" className='pl-10'>Coaching</Link>
        <Link to="/#programs" className='pl-10'>Programs</Link>
        <NavLink to="/nutrition" className='pl-10'>Nutrition</NavLink>
        <NavLink to="/aboutme" className='pl-10'>About me</NavLink>
        <Link to="/#contact" className='pl-10'>Contact me</Link>
      </div>
    </>

    const toggleNav = <>
      <div className="lg:text-xl text-white text-right">
        <button onClick={handleOpen}>{open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</button>
        {open ? (
          <ul className="text-white divide-y">
            <li>
              <NavLink to="/" className='text-lg'>Home</NavLink>
            </li>
            <li>
              <Link to="/#1on1coaching" className='text-lg'>Coaching</Link>
            </li>
            <li>
            <Link to="/#programs" className='text-lg'>Programs</Link>
            </li>
            <li>
              <NavLink to="/nutrition" className='text-lg'>Nutrition</NavLink>
            </li>
            <li>
              <NavLink to="/aboutme" className='text-lg'>About me</NavLink>
            </li>
            <li>
            <Link to="/#contact" className='text-lg'>Contact me</Link>
            </li>
          </ul>
        ) : null}
      </div>
    </>

  return (
    <nav style={{backgroundColor: window.location.pathname === '/' ? 'transparent' : '#162E3B'}} className='flex items-center py-5 px-10 lg:px-40 justify-end'>
      {window.innerWidth > 768 ? fullNav : toggleNav}
    </nav>
  )
}

export default Navbar
