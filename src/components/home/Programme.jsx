import React from 'react'
import BookButton from '../home/BookButton'

function Programme(props) {
  const styles = {
    backgroundColor: props.position === 'mid' ? '#162E3B' : "#334659"
}
  return (
    <div style={styles} className='text-white w-full xl:w-1/3 px-8 lg:px-16 py-10 lg:py-16'>
      <h2 className='text-center text-xl font-bold mb-10 lg:mb-16'>{props.title}</h2>
      <ul className='list-disc h-1/2 mb-10 lg:mb-0'>
        <li>1 month training plan</li>
        <li>Videos for demonstration</li>
        {props.extra && <li>{props.extra}</li>}
      </ul>
      <BookButton />
    </div>
  )
}

export default Programme
