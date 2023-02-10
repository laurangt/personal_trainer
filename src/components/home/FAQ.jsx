import React from 'react'

function FAQ(props) {
  return (
    <div className='ml-40 mr-40 mb-5 text-justify'>
      <p className='font-bold'>{props.question}</p>
      <p>{props.answer}</p>
    </div>
  )
}

export default FAQ
