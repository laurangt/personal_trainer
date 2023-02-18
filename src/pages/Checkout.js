import React, {useState, useEffect} from 'react';
import PayPal from '../components/PayPal';

function Checkout() {
  const [checkout, setCheckOut] = useState(false)

  return (
    <div>
      {checkout ? (
        <PayPal />
      ) : (
        <button
          onClick={() => {
            setCheckOut(true);
          }}
        >
        Checkout
      </button>
      )}
    </div>
  )

}

export default Checkout
