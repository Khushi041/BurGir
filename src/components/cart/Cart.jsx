import React from 'react'
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.jpg";
import burger3 from "../../assets/burger3.jpg"
import {Link} from "react-router-dom"



const CardItem = ({value, title, img,increment, decrement}) => (
    <div className='cartItem'>

        <div>
            <h4>{title}</h4>
            <img src={img} alt="Item" />
      </div>

      <div>

        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>

      </div>
    </div>
);


const Cart = () => {
const increment = (item) =>{};

const decrement = (item) =>{};



  return (
    <section className='cart'>
        <main>

            <CardItem 
            title={"Cheese Burger"} 
            img={burger1} 
            value = {0} 
            increment={() => increment(1)}
            decrement={() => decrement(1)}
            />

<CardItem 
            title={" Tandoori Burger"} 
            img={burger2} 
            value = {0} 
            increment={() => increment(2)}
            decrement={() => decrement(2)}
            />

<CardItem 
            title={" peri-peri"} 
            img={burger3} 
            value = {0} 
            increment={() => increment(3)}
            decrement={() => decrement(3)}
            />
            <article>
                <div>
                    <h4>
                        Sub Total
                    </h4>
                 
                    <p>₹ {1200}</p>
                        

                    
                </div>

                <div>
                    <h4>
                        Tax
                    </h4>
                 
                    <p>₹ {1200*0.18}</p>
                        

                    
                </div>
                <div>
                    <h4>
                     Shipping Charges
                    </h4>
                 
                    <p>₹ {120}</p>
                        

                    
                </div>

                <div>
                    <h4>
                        Net Total
                    </h4>
                 
                    <p>₹ {1200+1200*0.18+
                    120}</p>
                        

                    
                </div>
                <Link to="/shipping">
                Checkout
                </Link>


            </article>




        </main>


    </section>
  )
}

export default Cart