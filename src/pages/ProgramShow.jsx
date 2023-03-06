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
  console.log(programData)

  return (
    <div>
      <Navbar />
      <h1>{programData.duration}</h1>
      <p>{programData.fulldescription}</p>
      <Footer/>
    </div>
  )
}

export default ProgramShow
