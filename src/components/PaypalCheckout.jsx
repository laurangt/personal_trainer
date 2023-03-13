import React, {useState, useEffect} from 'react'
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

function PaypalCheckout(props) {
  const amount = props.price;
  const description = props.itemSelling
  const currency = "USD";
  // const style = {"layout":"vertical"};

  // const [show, setShow] = useState(false);
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
                      currency_code: currency,
                      value: amount,
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
      // const {payer} = details;
      setSuccess(true)
      // alert("Transaction completed by " + details.payer.name.given_name)
    });
  };

  const onError = (data, actions) => {
    setErrorMessage("An error occurred with your payment");
  }

  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
            ...options,
            currency: currency,
          },
      });
    }, [currency, showSpinner]);


    return (<>
      { (showSpinner && isPending) && <div className="spinner" /> }
        <PayPalButtons
          style={{layout: "vertical"}}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      </>
    );
  }

  return (
    <div>
      <PayPalScriptProvider
        options={{
          "client-id": process.env.REACT_APP_CLIENT_ID
        }}
      >
        <div className='flex justify-between mb-3 lg:flex-col'>
          <li>1x {props.itemSelling}</li>
          <span>Total price: {props.price}€</span>
        </div>
        {/* if onclick only display paypal: */}
        {/* <button onClick={() => setShow(true) } type="submit">Buy now</button> */}
        {/* {show ? (
          <PayPalButtons
            style={{layout: "vertical"}}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        ) : null} */}

        {/* <PayPalButtons
          style={{layout: "vertical"}}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        /> */}
        <div className='text-center'>
          {success ? (
            <h1>Your Payment has been done successfully please check email</h1>
          ) : null}

          <ButtonWrapper
            currency={currency}
            showSpinner={false}
          />
        </div>
      </PayPalScriptProvider>
    </div>
  )
}

export default PaypalCheckout
