import React from 'react'
import BookButton from '../home/BookButton'

function Programme(props) {
  const styles = {
    backgroundColor: props.position === 'mid' ? '#162E3B' : "#334659"
}
  return (
    <div style={styles} className='text-white w-1/3 h-96 px-32 py-16'>
      <h2 className='text-center text-xl font-bold mb-16'>{props.title}</h2>
      <ul className='list-disc'>
        <li>1 month training plan</li>
        <li>Videos for demonstration</li>
        {props.extra && <li>{props.extra}</li>}
      </ul>
      <BookButton />
    </div>
  )
}

export default Programme
