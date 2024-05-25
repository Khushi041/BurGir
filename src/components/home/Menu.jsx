import React from 'react'
import MenuCard from './MenuCard'
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.jpg";
import burger3 from "../../assets/burger3.jpg"


const Menu = () => {
const addToCartHandler = (itemNum) => {

}

  return (
   <section id="menu">

    <h1>MENU</h1>
    <div>
        <MenuCard itemNum={1}
         burgerSrc={burger1} 
         price={120} 
         title="Veg Cheese Burger"
         handler={addToCartHandler}
         delay={0.1}
         />

<MenuCard itemNum={2}
         burgerSrc={burger2} 
         price={210} 
         title="BBQ Burger"
         handler={addToCartHandler}
         delay={0.5}
         />

<MenuCard itemNum={3}
         burgerSrc={burger3} 
         price={320} 
         title="Tandoori Burger"
         handler={addToCartHandler}
         delay={0.8}
         />

    </div>

   </section>
  )
}

export default Menu