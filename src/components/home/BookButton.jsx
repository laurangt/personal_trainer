import React from 'react'

function BookButton(props) {
  return (
    <button className="hover:bg-white font-bold text-xl lg:mb-16 border bg-yellow text-black w-52 h-14 rounded-lg flex m-auto justify-center items-center">
      <p>{props.text}</p>
    </button>
  )
}

export default BookButton
