import React from 'react'
import backgroundImage from '../../images/backgroundhome.jpg'
function LandingPage() {
  return (
    <div className="background-size"style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Your online personal trainer, whenever and wherever you are.</h1>
      <h2>Are you ready to start your fitness journey?</h2>
      <button>Online coaching</button>
      <button>Programmes</button>
    </div>
  )
}

export default LandingPage
