import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ProgramShow() {
  const params = useParams();
  const {slug} = params;

  const [programData, setProgramData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/programmes/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setProgramData(data)
      });
  }, [slug])

  return (
    <div>
      <Navbar />
      <div className='mx-10 lg:mx-40 mt-7 lg:mt-14 mb-20 text-justify text-lg'>
        <div className='text-2xl text-center mb-7 lg:mb-10'>
          <h2 className='font-bold'>{programData.name}</h2>
          <p>{programData.price}€</p>
        </div>
        <p className='mb-5'>{programData.fulldescription}</p>
        <p>What you need and what's included?</p>
        <ul className='list-disc h-1/2 mb-10'>
          {programData.description && programData.description.split(',').map((item, index) => {
            return (
              <li key={index} className="ml-10">{item}</li>
            )
          })}
          <li className="ml-10">Exercises, Sets, Reps and Rest Time</li>
          <li className="ml-10">Explanation on how to execute each exercise</li>
        </ul>
        <p>Complete your order here</p>
        <p className='text-sm'>You will get an email with the programme and will be able to access the video demonstrations through dropbox. A dropbox link will be included in the email through which you can watch and download the videos.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default ProgramShow
