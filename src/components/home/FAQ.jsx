import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons'

function FAQ(props) {
  const [open, setOpen] = useState(false)

  function handleOpen(){
    setOpen(!open)
  }

  const fullFAQ =
    <>
      <div className='mb-5 text-justify'>
        <p className='font-bold'>{props.question}</p>
        <p>{props.answer}</p>
      </div>
    </>
  const questionsOnly =
    <>
      <div className='mb-5 text-justify'>
          <p className='font-bold'>{props.question}</p>
      </div>
    </>
    const dropdownFAQ =
      <div className="flex justify-between" >
        {open ? fullFAQ : questionsOnly}
        <button className='self-start	ml-5' onClick={handleOpen}>{open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faAngleDown} />}</button>
      </div>
    return (
      <>
        {window.innerWidth > 768 ? fullFAQ : dropdownFAQ}
      </>
  )
}

export default FAQ
