import React from 'react'
import Button from '../Button'

function Coaching() {
  const coachingPrice = 120
  return (
    <div className='text-white py-16 w-1/4'>
      <h2>1-1 ONLINE COACHING</h2>
      <div className='flex justify-between'>
        <p>FOR 1 MONTH</p>
        <p>{coachingPrice}€</p>
      </div>
      <ul>
        <li>Anamnesis</li>
        <li>Personalised Training Plan</li>
        <li>Videos for demonstration</li>
        <li>Individual Nutrition Plan</li>
        <li>General Tips</li>
        <li>Follow up: Zoom/Phone call 1x/week</li>
        <li>Contact me anytime</li>
      </ul>
      <Button text="Book now" className=""/>
    </div>
  )
}

export default Coaching
