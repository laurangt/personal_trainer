import React from 'react'
import BookButton from './BookButton'

function BeginnerProgramme(props) {
  const beginnerPrice = 95;

  return (
    <div className='text-white w-1/3 h-96 px-32 py-16 bg-programme-blue relative'>
      <h2 className='text-center text-xl font-bold mb-16'>{props.title}</h2>
      <div className='flex justify-between font-bold text-xl'>
        <p>FOR 6 MONTHS</p>
        <p>{beginnerPrice}€</p>
      </div>
      <ul className='list-disc'>
        <li>Training Plan (from beginner to advanced)</li>
        <li>Videos for demonstration</li>
      </ul>
      <BookButton />
      <p className='absolute -rotate-45 bg-coaching-blue text-yellow text-2xl font-bold py-1 px-3 top-6 -left-12'>BEST SELLER</p>
    </div>
  )
}

export default BeginnerProgramme
