import React from 'react'

function Button(props) {
  return (
    <button className="border bg-yellow text-black w-64 h-14 rounded-lg">
      <p>{props.text}</p>
    </button>
  )
}

export default Button
