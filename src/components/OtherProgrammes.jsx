import React, {useState, useEffect} from 'react'
import BookButton from './home/BookButton'
import axios from 'axios'

function OtherProgrammes(props) {
  const [otherProgrammes, setOtherProgrammes] = useState([])

  const API_URL = "http://localhost:3000/api/v1/programmes"
  function getAPIData(){
    return axios.get(API_URL).then((response) => response.data)
  }

  useEffect(() => {
    let mounted = true
    getAPIData().then((items) => {
      if (mounted){
        setOtherProgrammes(items)
      }
    })
    return () => {mounted = false}
  }, [])


  return (<div className='flex overflow-x-scroll'>
    {otherProgrammes.map((program)=> {
      if (program.slug === props.currentSlug) {
        return <div key={program.id}></div>
      } else {
        return (
        <div key={program.id} className='bg-programme-blue text-white p-8 mb-5 border-b-4 border-r-4 border-white rounded-lg'>
          <div className='text-center text-xl font-bold mb-10 min-w-max'>
            <h2>{program.name.toUpperCase()}</h2>
            <p>{program.price} €</p>
          </div>
          <ul className='list-disc h-1/2 mb-5 lg:mb-0'>
            <li>Train {program.duration}</li>
            {program.description.split(",").map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })}
          </ul>
          <a href={`/program/${program.slug}/`}>
            <BookButton text="Book now"/>
          </a>
        </div>
        )
      }
    })}
  </div>
  )
}

export default OtherProgrammes
