import React from 'react'
import backgroundImage from '../../images/backgroundhome.jpg'
import Button from '../Button'

function LandingPage() {
  return (
    <div className="text-white bg-cover bg-center h-screen p-60 flex flex-col justify-center"style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className='text-6xl w-4/6 mb-20'>Your online personal trainer, whenever and wherever you are.</h1>
      <h2 className='text-3xl	mb-5'>Are you ready to start your fitness journey?</h2>
      <div className='flex w-3/5'>
        <button className='mr-8 text-2xl	font-bold'><Button text="Coaching" /></button>
        <button className='text-2xl	font-bold'><Button text="Programmes" /></button>
      </div>
    </div>
  )
}

export default LandingPage
