import React from 'react'

function Intro(props) {
  const text = <>
      <div className='flex-col m-8 lg:m-40 flex justify-center'>
        <h2 className='text-center mb-10 text-3xl	font-bold tracking-wide'>{props.title}</h2>
        <p className='text-justify'>{props.text}</p>
        <p className='text-justify'>{props.extratext}</p>
      </div>
    </>
  const img =  <>
    <img className="lg:w-6/12 object-cover" src={props.img} alt={props.description}/>
  </>

  return (
    <div>
      <div className='flex flex-col lg:flex-row'>
        {props.location === 'left' ?
        <>{text}{img}</> :
        <>{img}{text}</>
        }
      </div>
    </div>
  )
}

export default Intro
