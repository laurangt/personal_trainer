import React from 'react'
import BookButton from './BookButton'

function Coaching() {
  const coachingPrice = 120
  return (
    <div className='text-white lg:mx-auto py-10 lg:py-16 w-full xl:w-2/5 bg-coaching-blue lg:border-x-4 lg:border-r-white'>
      <div className='md:w-1/2 m-auto px-10 lg:px-0'>
        <h2 className='text-center font-bold text-2xl mb-16'>1-1 ONLINE COACHING</h2>
        <div className='flex justify-between font-bold text-xl'>
          <p>FOR 1 MONTH</p>
          <p>{coachingPrice}€</p>
        </div>
        <ul className='leading-10 mb-10'>
          <li>Anamnesis</li>
          <li>Personalised Training Plan</li>
          <li>Videos for demonstration</li>
          <li>Individual Nutrition Plan</li>
          <li>General Tips</li>
          <li>Follow up: Zoom/Phone call 1x/week</li>
          <li>Contact me anytime</li>
        </ul>
        <BookButton />
      </div>
    </div>
  )
}

export default Coaching
