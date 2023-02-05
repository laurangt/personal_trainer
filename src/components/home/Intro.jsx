import React from 'react'

function Intro(props) {
  return (
    <div>
      <div className='flex'>
        <div className='flex-col m-40 flex justify-center'>
          <h2 className='text-center mb-10 text-3xl	font-bold tracking-wide'>{props.title}</h2>
          <p className='text-justify'>{props.text}</p>
          <p className='text-justify'>{props.extratext}</p>
        </div>
        <img className="w-6/12 object-cover" src={props.img} alt={props.description}/>
      </div>
    </div>
  )
}

export default Intro
