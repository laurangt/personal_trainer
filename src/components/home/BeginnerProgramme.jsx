import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import BookButton from './BookButton'
import axios from 'axios'

function BeginnerProgramme() {
  const [bundlePrograms, setBundlePrograms] = useState([])

  const API_URL = "http://localhost:3000/api/v1/bundles"
  function getAPIData(){
    return axios.get(API_URL).then((response) => response.data)
  }

  useEffect(() => {
    let mounted = true
    getAPIData().then((items) => {
      if (mounted){
        setBundlePrograms(items)
      }
    })
    return () => {mounted = false}
  }, [])

  return (<>
    {bundlePrograms.map((bundleProgram) => {
      return (
        <div key={bundleProgram.id} className='text-white w-4/5 pb-10 lg:pb-0 xl:w-1/3 px-10 sm:px-32 bg-programme-blue relative'>
          <h2 className='text-center pt-10 lg:pt-16 text-xl font-bold mb-10'>{bundleProgram.name.toUpperCase()}</h2>
          <div className='flex justify-between font-bold text-xl'>
            <p className='mb-5'>FOR {bundleProgram.duration.toUpperCase()}</p>
            <p>{bundleProgram.price}€</p>
          </div>
          <ul className='list-disc mb-10'>
            <li>{bundleProgram.description}</li>
            <li>Videos for demonstration</li>
          </ul>
          <Link to={`/bundle/${bundleProgram.slug}`}>
            <BookButton />
          </Link>
          <p className='absolute -rotate-45 bg-coaching-blue text-yellow lg:text-2xl font-bold py-1 px-3 top-3 -left-10 lg:top-6 lg:-left-12'>BEST SELLER</p>
        </div>
      )
    })}
  </>
  )
}

export default BeginnerProgramme
