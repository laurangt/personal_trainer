import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import BookButton from '../home/BookButton'

import axios from 'axios'

function Programme(props) {
  const [programmes, setProgrammes] = useState([])

  const API_URL = "http://localhost:3000/api/v1/programmes"
  function getAPIData(){
    return axios.get(API_URL).then((response) => response.data)
  }


  useEffect(() => {
    let mounted = true
    getAPIData().then((items) => {
      if (mounted){
        setProgrammes(items)
      }
    })
    return () => {mounted = false}
  }, [])


  const styles = {
    backgroundColor: props.position === 'mid' ? '#162E3B' : "#334659"
  }

  return (<>
    {programmes.map((program)=> {
      return (
      <div key={program.id} style={styles} className='text-white w-full xl:w-1/3 px-8 lg:px-16 py-10 lg:py-16'>
        <h2 className='text-center text-xl font-bold mb-10 lg:mb-16'>{program.name.toUpperCase()}</h2>
        <ul className='list-disc h-1/2 mb-10 lg:mb-0'>
          <li>{program.duration} training plan</li>
          <li>{program.description}</li>
        </ul>
        <p>{program.price} €</p>
        <Link to={`/program/${program.slug}`}>
          <BookButton />
        </Link>
      </div>
      )
    })}
  </>
  )
}

export default Programme
