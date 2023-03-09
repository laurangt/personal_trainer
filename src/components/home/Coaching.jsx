import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import BookButton from './BookButton'
import { HashLink as Link } from 'react-router-hash-link';

import axios from 'axios'

function Coaching() {
  const [coachings, setCoachings] = useState([])

  const API_URL = "http://localhost:3000/api/v1/coachings"
  function getAPIData(){
    return axios.get(API_URL).then((response) => response.data)
  }

  useEffect(() => {
    let mounted = true
    getAPIData().then((items) => {
      if (mounted){
        setCoachings(items)
      }
    })
    return () => {mounted = false}
  }, [])

  return (<>
    {coachings.map((coaching) => {
      return (
        <div key={coaching.id} className='text-white lg:mx-auto py-10 lg:py-16 w-full xl:w-2/5 bg-coaching-blue lg:border-x-4 lg:border-r-white'>
          <div className='md:w-1/2 m-auto px-10 lg:px-0'>
            <h2 className='text-center font-bold text-2xl mb-16'>{coaching.name}</h2>
            {/* <div className='flex justify-between font-bold text-xl'> */}
              {/* <p>FOR {coaching.duration}</p> */}
              {/* <p>{coaching.price}€</p> */}
            {/* </div> */}
            <ul className='leading-10 mb-10 list-disc '>
              {coaching.descriptions.split(",").map((item, index) => {
                return (
                  <li key={index} className="sm:ml-10">{item}</li>
                )
              })}
            </ul>
            <Link to="/#contact">
              <BookButton text="Apply now"/>
            </Link>
          </div>
        </div>
      )
    })}
  </>
  )
}

export default Coaching
