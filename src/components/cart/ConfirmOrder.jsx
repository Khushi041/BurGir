import React from 'react'

const ConfirmOrder = () => {
  return (
 <section className='confirmOrder'>
<main>
    <h1>Conifrm Order</h1>

    <form>

<div>
    <label>Cash On Delivery</label>
    <input type='radio' name="payment" />
</div>

<div>
    <label>Online Payment</label>
    <input type='radio' name="payment" />
</div>

<button type='submit'>Place Order</button>

    </form>
</main>
 </section>
  )
}

export default ConfirmOrder