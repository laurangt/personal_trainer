import React, {useEffect} from 'react'
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

function PaypalCheckout() {
  const amount = "2";
  const description = "Program1"
  const currency = "USD";
  const style = {"layout":"vertical"};

  // const { product } = props
  // const [paidFor, setPaidFor] = useState(false);
  // const [error, setError] = useState(null);

  // const handleApprove = (orderId) => {
  //   // Call backend function to fulfill order
  //   // if response is success
  //   if (Response.ok){
  //     setPaidFor(true);
  //     // Refresh user's account or subscription status
  //   } else {
  //     // if response is error
  //     setError("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  //   }
  // };

  // if (paidFor) {
  //   // Display success message, modal or redirect user to success page
  //   alert("Thank you for your purchase!");
  // }

  // if (error) {
  //   // Display error message, modal or redirect user to error page
  //   alert(error);
  // }

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
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
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
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
                })
                .then((orderId) => {
                    // Your code here after create the order
                    return orderId;
                });
          }}

          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
                // Your code here after capture the order
              alert("Transaction completed by " + details.payer.name.given_name)
              // handleApprove(data.orderID)
            });
          }}

          // onError={(err) => {
          //   setError(err);
          //   console.error("PayPal Checkout onError", err);
          // }}

          // onCancel={() => {
          //   // Display cancel message, modal or redirect user to cancel page or back to cart
          //   alert("You have canceled your order")
          // }}
        />
      </>
    );
}


  return (
    <div className='flex flex-col justify-center text-center mt-20'>
      <h1 className='text-2xl'>Program</h1>
      <p>$10.00</p>
      <PayPalScriptProvider options={{"client-id": process.env.REACT_APP_CLIENT_ID}}>
        <div style={{ maxWidth: "750px", minHeight: "200px" }}>
          <PayPalScriptProvider
            options={{
              "client-id": "test",
              components: "buttons",
              currency: "USD"
            }}
          >
            <ButtonWrapper
              currency={currency}
              showSpinner={false}
            />
          </PayPalScriptProvider>
        </div>
      </PayPalScriptProvider>
      <form>
        <button type="submit" className='bg-black text-white p-5'>Buy now</button>
      </form>
    </div>
  )
}

export default PaypalCheckout
