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


  return (<div className='lg:flex'>
    {otherProgrammes.map((program)=> {
      if (program.slug === props.currentSlug) {
        return <></>
      } else {
        return (
        <div key={program.id} className='bg-programme-blue text-white px-3 lg:px-8 py-5 lg:py-8 border-b-4 lg:border-r-4 lg:border-white'>
          <div className='text-center text-xl font-bold lg:mb-8'>
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
