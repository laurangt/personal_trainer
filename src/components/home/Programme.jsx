import React from 'react'
import Button from '../Button'

function Programme(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul>
        <li>1 month training plan</li>
        <li>Videos for demonstration</li>
        <li>{props.extra}</li>
      </ul>
      <Button text="Book now"/>
    </div>
  )
}

export default Programme
