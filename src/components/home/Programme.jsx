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
      <div key={program.id} style={styles} className='text-white w-full p-16 mb-10 border-b-4 border-r-4 border-white rounded-lg'>
        <div className='text-center text-xl font-bold mb-10 min-w-max'>
          <h2>{program.name.toUpperCase()}</h2>
          <p>{program.price} €</p>
        </div>
        <ul className='list-disc h-1/2 lg:mb-0 mb-5'>
          <li className="text-lg">Train {program.duration}</li>
          {program.description.split(",").map((item, index) => {
            return (
              <li key={index} className="text-lg">{item}</li>
            )
          })}
        </ul>
        <Link to={`/program/${program.slug}/`}>
          <BookButton text="Get it now"/>
        </Link>
      </div>
      )
    })}
  </>
  )
}

export default Programme
