import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Button } from './components/reusable_styled/Reusable.Styled'

const publishableStripeKey = "pk_test_51MH1kMSHriqitrpZ9wzffFCtudBTZqeAWtNlloNOUSdgGVhYV4HzBVPbmKsX4lOGGt2J2eSfbpP9IZTyoFWfYUxv0056vxnuZt"

function Pay() {
    const [stripeToken,setStripeToken] = useState(null)
    //this function will get token when our paymnent stripe form is sent with success
    const onToken = (token)=>{
        setStripeToken(token);
    }

   useEffect(()=>{
     const makeRequest = async ()=>{
        try {
           const res = await axios.post(
            "http://localhost:5000/api/checkout/payment",
           //providing token that we get after successful data sent from react-stripe-checkout & amt
           {
            tokenId:stripeToken.id,
            amount:50000,
           }
           )
           console.log(res.data)
        } catch (error) {
            console.log(error)
        }
     };
     //if stripetoken true then call makeRequest()
     stripeToken && makeRequest();
    },[stripeToken]
   )

  return (<>
  <StripeCheckout
  name='AZURE'
  image='logo'
  billingAddress
  shippingAddress
  description='Your total amount is $500'
  amount={50000}
    token={onToken}
    // stripeKey="my_PUBLISHABLE_stripekey"
    stripeKey={publishableStripeKey}


  >
   <Button>Pay</Button>
   </StripeCheckout>
  </>
  )
}

export default Pay