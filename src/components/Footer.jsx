import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    // make non sticky but rights still seeable
    <div className='bottom-0 relative w-screen flex h-20 mt-auto bg-footer-blue text-white'>
      <div className='flex items-center m-auto'>
        <a className="pl-3 pr-3 text-3xl" target="_blank" rel="noreferrer" href="https://www.instagram.com/nevski.fit/"><FontAwesomeIcon icon={faInstagram} /></a>
        <a className="pl-3 pr-3 text-3xl" target="_blank" rel="noreferrer" href="https://www.tiktok.com/@nevskifit"><FontAwesomeIcon icon={faTiktok} /></a>
      </div>
      <p className='absolute bottom-2 right-2' >© 2022 by Sven Nguyen-Trong. All rights reserved.</p>
    </div>
  )
}

export default Footer
