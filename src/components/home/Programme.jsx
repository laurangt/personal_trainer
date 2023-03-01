import React from 'react'
import { Link } from 'react-router-dom'
import BookButton from '../home/BookButton'

function Programme(props) {
  const program = props.program
  const styles = {
    backgroundColor: program.position === 'mid' ? '#162E3B' : "#334659"
  }
  return (
    <div style={styles} className='text-white w-full xl:w-1/3 px-8 lg:px-16 py-10 lg:py-16'>
      <h2 className='text-center text-xl font-bold mb-10 lg:mb-16'>{program.name.toUpperCase()}</h2>
      <ul className='list-disc h-1/2 mb-10 lg:mb-0'>
        <li>{program.duration} training plan</li>
        <li>{program.description}</li>
      </ul>
      <p>{program.price} €</p>
      <Link to={`/program/${program.slug}`}>
        <BookButton />
      </Link>
    </div>
  )
}

export default Programme
