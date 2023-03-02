import React from 'react'
import { Link } from 'react-router-dom'
import BookButton from './BookButton'

function Coaching(props) {
// console.log(props)
const onlineCoaching = props.onlineCoaching
  return (
    <div className='text-white lg:mx-auto py-10 lg:py-16 w-full xl:w-2/5 bg-coaching-blue lg:border-x-4 lg:border-r-white'>
      <div className='md:w-1/2 m-auto px-10 lg:px-0'>
        <h2 className='text-center font-bold text-2xl mb-16'>{onlineCoaching.name}</h2>
        <div className='flex justify-between font-bold text-xl'>
          <p>FOR {onlineCoaching.duration}</p>
          <p>{onlineCoaching.price}€</p>
        </div>
        <ul className='leading-10 mb-10'>
          {onlineCoaching.description.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          })}
        </ul>
        <Link to={`program/${onlineCoaching.slug}`}>
          <BookButton />
        </Link>
      </div>
    </div>
  )
}

export default Coaching
