import React, {useState} from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { faHourglass2 } from '@fortawesome/free-regular-svg-icons';

function PaypalCheckout() {
  const amount = "2";
  const description = "Program1"
  const currency = "USD";
  // const style = {"layout":"vertical"};

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  const createOrder = (data, actions) => {
    return actions.order
        .create({
            purchase_units: [
                {
                  description: description,
                  amount: {
                      currency_code: "USD",
                      value: 20,
                  },
                },
            ],
            application_context: {
              shipping_preference: 'NO_SHIPPING'
            }
        })
        .then((orderId) => {
            setOrderID(orderID)
            return orderId;
        });
  };

  const onApprove = (data, actions)  => {
    return actions.order.capture().then(function (details) {
      const {payer} = details;
      setSuccess(true)
      // alert("Transaction completed by " + details.payer.name.given_name)
    });
  };

  const onError = (data, actions) => {
    setErrorMessage("An error occured with your payment");
  }

  // const ButtonWrapper = ({ currency, showSpinner }) => {
  //   const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  //   useEffect(() => {
  //     dispatch({
  //         type: "resetOptions",
  //         value: {
  //           ...options,
  //           currency: currency,
  //         },
  //     });
  //   }, [currency, showSpinner]);


  //   return (<>
  //     { (showSpinner && isPending) && <div className="spinner" /> }
  //     <PayPalButtons
  //         disabled={false}
  //         forceReRender={[amount, currency, style]}
  //         fundingSource={undefined}
  //         style={{layout: "vertical"}}
  //         createOrder={createOrder}
  //         onApprove={onApprove}
  //         onError={onError}
  //       />
  //     </>
  //   );
  // }

  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id": process.env.REACT_APP_CLIENT_ID
        }}
      >
        <h1>Program1</h1>
        <span>20€</span>
        <button onClick={() => setShow(true) } type="submit">Buy now</button>

        {show ? (
          <PayPalButtons
            style={{layout: "vertical"}}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        ) : null}

        {success ? (
          <h1>Your Payment has been done successfully please check email</h1>
        ) : null}

        {/* <ButtonWrapper
          currency={currency}
          showSpinner={false}
        />
        <button type="submit" onClick={() => setShow(true)} className='bg-black text-white p-5'>Buy now</button> */}

      </PayPalScriptProvider>
    </div>
  )
}

export default PaypalCheckout
