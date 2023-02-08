import React from 'react'
import Button from '../Button'

function Coaching() {
  const coachingPrice = 120
  return (
    <div>
      <h2>1-1 ONLINE COACHING</h2>
      <p>FOR 1 MONTH</p>
      <p>{coachingPrice}€</p>
      <ul>
        <li>Anamnesis</li>
        <li>Personalised Training Plan</li>
        <li>Videos for demonstration</li>
        <li>Individual Nutrition Plan</li>
        <li>General Tips</li>
        <li>Follow up: Zoom/Phone call 1x/week</li>
        <li>Contact me anytime</li>
      </ul>
      <Button text="Book now"/>
    </div>
  )
}

export default Coaching
