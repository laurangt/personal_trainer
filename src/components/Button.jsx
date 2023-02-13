import React from 'react'

function Button(props) {
  return (
    <button className="mr-14 mb-5 text-xl lg:text-2xl font-bold border bg-yellow text-black w-64 h-14 rounded-lg">
      <p>{props.text}</p>
    </button>
  )
}

export default Button
