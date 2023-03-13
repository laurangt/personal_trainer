import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PaypalCheckout from '../components/PaypalCheckout';

function CoachingShow() {
  const params = useParams();
  const {slug} = params;

  const [coachingData, setCoachingData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/coachings/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setCoachingData(data)
      });
  }, [slug])

  return (
    <div>
      <Navbar />
      <div className='h-screen mx-10 lg:mx-40 mt-7 lg:mt-14 mb-20 text-justify text-lg'>
        <div className='text-2xl text-center mb-7 lg:mb-10'>
          <h2 className='font-bold'>{coachingData.name}</h2>
          <p>{coachingData.price}€</p>
        </div>
        <div className='lg:flex'>
          <div className='lg:w-1/3 lg:mr-20'>
            <p className='mb-5'>{coachingData.fulldescription}</p>
            <p>What is included?</p>
            <ul className='list-disc h-1/2 mb-10'>
              {coachingData.descriptions && coachingData.descriptions.split(',').map((item, index) => {
                return (
                  <li key={index} className="sm:ml-10">{item}</li>
                  )
                })}
            </ul>
          </div>
          <div className='lg:w-2/3 text-center'>
            <p className='font-bold'>Let  your fitness journey begin!</p>
            <PaypalCheckout
              price={coachingData.price}
              itemSelling={coachingData.name}
            />
          </div>
        </div>
        <p className='mt-10'>You will get an email with the programmes and will be able to access the video demonstrations through dropbox. A dropbox link will be included in the email through which you can watch and download the videos.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default CoachingShow
