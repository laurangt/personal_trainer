import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
  console.log(coachingData)

  return (
    <div>
      <Navbar />
      <div>
        <h1>{coachingData.name}</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default CoachingShow
