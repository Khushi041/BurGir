import React from 'react'
import { Link } from 'react-router-dom'

const paymentSuccess = () => {
  return (
    <section className='paymentsuccess'>
        <main>
            <h1>Order Confirmed</h1>
            <p>Order Placed Successfully, You Can Check Order Status Below</p>
            <Link to ="/myorders">Check Status</Link>
        </main>

    </section>
  )
}

export default paymentSuccess