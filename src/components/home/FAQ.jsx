import React, {useState, useEffect, useCallback} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faXmark } from '@fortawesome/free-solid-svg-icons'

function FAQ(props) {
  const [open, setOpen] = useState(false)

  function handleOpen(){
    setOpen(!open)
  }

  const fullFAQ =
    <>
      <div className='mb-5 text-justify text-lg'>
        <p className='font-bold'>{props.question}</p>
        <p>{props.answer}</p>
      </div>
    </>
  const questionsOnly =
    <>
      <div className='mb-5 text-justify text-lg'>
          <p className='font-bold'>{props.question}</p>
      </div>
    </>
    const dropdownFAQ =
      <div className="flex justify-between text-lg" >
        {open ? fullFAQ : questionsOnly}
        <button className='self-start	ml-5' onClick={handleOpen}>{open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faAngleDown} />}</button>
      </div>

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const isBreakpoint = useMediaQuery(768)

    return (
      <>
        {isBreakpoint ? dropdownFAQ : fullFAQ}
      </>
  )
}

export default FAQ
