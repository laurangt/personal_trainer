import React from 'react'
import { Link } from 'react-router-dom'
import BookButton from './BookButton'

function BeginnerProgramme(props) {
  const beginnerProgram = props.beginnerProgram

  return (
    <div className='text-white w-4/5 pb-10 lg:pb-0 xl:w-1/3 px-10 sm:px-32 bg-programme-blue relative'>
      <h2 className='text-center pt-10 lg:pt-16 text-xl font-bold mb-10'>{beginnerProgram.name.toUpperCase()}</h2>
      <div className='flex justify-between font-bold text-xl'>
        <p className='mb-5'>FOR {beginnerProgram.duration.toUpperCase()}</p>
        <p>{beginnerProgram.price}€</p>
      </div>
      <ul className='list-disc mb-10'>
        <li>{beginnerProgram.description}</li>
        {/* <li>Videos for demonstration</li> */}
      </ul>
      <Link to={`/program/${beginnerProgram.slug}`}>
        <BookButton />
      </Link>
      <p className='absolute -rotate-45 bg-coaching-blue text-yellow lg:text-2xl font-bold py-1 px-3 top-3 -left-10 lg:top-6 lg:-left-12'>BEST SELLER</p>
    </div>
  )
}

export default BeginnerProgramme
