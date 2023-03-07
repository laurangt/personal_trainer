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
        <div className='text-center text-xl font-bold lg:mb-16'>
          <h2 >{program.name.toUpperCase()}</h2>
          <p>{program.price} €</p>
        </div>
        <ul className='list-disc h-1/2 mb-10 lg:mb-0'>
          <li className="ml-10">Train {program.duration}</li>
          {program.description.split(",").map((item, index) => {
            return (
              <li key={index} className="ml-10">{item}</li>
            )
          })}
        </ul>
        <Link to={`/program/${program.slug}/`}>
          <BookButton text="Book now"/>
        </Link>
      </div>
      )
    })}
  </>
  )
}

export default Programme
