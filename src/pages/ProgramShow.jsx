import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

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
  }, [])
  console.log(programData)

  return (
    <div>
      <h1>{programData.duration}</h1>
    </div>
  )
}

export default ProgramShow
