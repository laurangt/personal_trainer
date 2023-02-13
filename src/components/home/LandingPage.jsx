import React from 'react'
import backgroundImage from '../../images/backgroundhome.jpg'
import Button from '../Button'

function LandingPage() {
  return (
    <div className="text-white bg-cover bg-center h-screen p-10 md:p-20 lg:p-60 flex flex-col justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className='text-4xl lg:text-6xl w-1/2 lg:w-4/6 mb-20'>Your online personal trainer, whenever and wherever you are.</h1>
      <h3 className='text-2xl lg:text-3xl	mb-5'>Are you ready to start your fitness journey?</h3>
      <div className='flex flex-col w-full sm:flex-row lg:w-3/5'>
        <a href="#1on1coaching"><Button text="Coaching" /></a>
        <a href="#programs"><Button text="Programs" /></a>
      </div>
    </div>
  )
}

export default LandingPage
