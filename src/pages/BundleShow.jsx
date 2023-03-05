import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
  console.log(bundleData)

  return (
    <div>
      <Navbar />
        <div>
         <h1>{bundleData.name}</h1>
        </div>
      <Footer/>
    </div>
  )
}

export default BundleShow
