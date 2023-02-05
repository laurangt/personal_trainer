import React from 'react'

function Footer() {
  return (
    <div className='bottom-0 fixed w-screen flex p-5 h-20 mt-auto bg-footer-blue text-white'>
      <div className='flex items-center'>
        <a href="#">instagram</a>
        <a href="#">tiktok</a>
      </div>
      <p className='absolute bottom-0 right-0' >© 2022 by Sven Nguyen-Trong. All rights reserved.</p>
    </div>
  )
}

export default Footer
