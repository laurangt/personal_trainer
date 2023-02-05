import React from 'react'
import backgroundImage from '../../images/backgroundhome.jpg'
import Button from '../Button'

function LandingPage() {
  return (
    <div className="text-white bg-cover bg-center h-screen p-60 flex flex-col justify-center"style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className='text-6xl w-4/6 mb-20'>Your online personal trainer, whenever and wherever you are.</h1>
      <h2 className='text-3xl	mb-5'>Are you ready to start your fitness journey?</h2>
      <div className='flex w-3/5'>
        <Button text="Coaching" />
        <Button text="Programmes" />
      </div>
    </div>
  )
}

export default LandingPage
