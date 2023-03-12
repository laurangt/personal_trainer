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
      <div className='mx-10 h-screen lg:mx-40 mt-7 lg:mt-14 mb-20 text-justify text-lg'>
        <div className='text-2xl text-center mb-7 lg:mb-10'>
          <h2 className='font-bold'>{coachingData.name}</h2>
          <p>{coachingData.price}€</p>
        </div>
        <div className='w-1/2 m-auto'>
          <p className='mb-5'>{coachingData.fulldescription}</p>
          <p>Thanks for reaching out, it was nice to meet you on our first call. I'm excited to be training you and help you reach your fitness goals. Let's do this!</p>
          <div className='my-10'>
            <p>Complete your payment:</p>
            <PaypalCheckout
              price={coachingData.price}
              itemSelling={coachingData.name}
            />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CoachingShow
