import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PaypalCheckout from '../components/PaypalCheckout';

function BundleShow() {
  const params = useParams();
  const {slug} = params;

  const [bundleData, setBundleData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/bundles/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setBundleData(data)
      });
  }, [slug])

  return (
    <div>
      <Navbar />
      <div className='mx-10 lg:mx-40 mt-7 lg:mt-14 mb-20 text-justify text-lg'>
        <div className='text-2xl text-center mb-7 lg:mb-10'>
          <h2 className='font-bold'>{bundleData.name}</h2>
          <p>{bundleData.price}€</p>
        </div>
        <div className='lg:flex'>
          <div className='lg:w-2/3 lg:mr-20'>
            <p className='mb-5'>{bundleData.fulldescription}</p>
            <p>What you need and what's included?</p>
            <ul className='list-disc h-1/2 mb-10'>
              {bundleData.description && bundleData.description.split(',').map((item, index) => {
                return (
                  <li key={index} className="sm:ml-10">{item}</li>
                  )
                })}
            </ul>
          </div>
          <div className='lg:w-1/3'>
            <p>Complete your purchase now:</p>
            <PaypalCheckout
              price={bundleData.price}
              itemSelling={bundleData.name}
            />
          </div>
        </div>
        <p className='mb-20'>You will get an email with the programmes and will be able to access the video demonstrations through dropbox. A dropbox link will be included in the email through which you can watch and download the videos.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default BundleShow
