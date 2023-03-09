import React, {useState, useCallback, useEffect} from 'react'
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
        <NavLink to="/" className='pl-10 hover:font-bold'>Home</NavLink>
        <Link to="/#1on1coaching" className='pl-10 hover:font-bold'>Coaching</Link>
        <Link to="/#programs" className='pl-10 hover:font-bold'>Programs</Link>
        <NavLink to="/nutrition" className='pl-10 hover:font-bold'>Nutrition</NavLink>
        <NavLink to="/aboutme" className='pl-10 hover:font-bold'>About me</NavLink>
        <Link to="/#contact" className='pl-10 hover:font-bold'>Contact me</Link>
      </div>
    </>

    const toggleNav = <>
      <div className="lg:text-xl text-white text-right">
        <button onClick={handleOpen}>{open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</button>
        {open ? (
          <ul className="text-white divide-y">
            <li className='hover:font-bold'>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className='hover:font-bold'>
              <Link to="/#1on1coaching">Coaching</Link>
            </li>
            <li className='hover:font-bold'>
            <Link to="/#programs">Programs</Link>
            </li>
            <li className='hover:font-bold'>
              <NavLink to="/nutrition">Nutrition</NavLink>
            </li>
            <li className='hover:font-bold'>
              <NavLink to="/aboutme">About me</NavLink>
            </li>
            <li className='hover:font-bold'>
            <Link to="/#contact">Contact me</Link>
            </li>
          </ul>
        ) : null}
      </div>
    </>

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const isBreakpoint = useMediaQuery(768)

return (
    <nav style={{backgroundColor: window.location.pathname === '/' ? 'transparent' : '#162E3B'}} className='flex items-center py-5 px-10 xl:px-40 justify-end' >
       <div>{isBreakpoint ? toggleNav : fullNav}</div>
    </nav>
  )
}

export default Navbar
