import React from 'react'
import {motion} from "framer-motion";
import Founders from './Founders';
import Menu from './Menu';
const Home = () => {
const options = {
    initial :{
        x:"-100%",
        opacity:0,
    },
    whileInView:{
        x:0,
        opacity:1,
    }
    
}
  return (
    <>
  <section className='home'>
<div>
    <motion.h1{...options}
   
    >
        BURGIR
      
    </motion.h1>
    <motion.h3 {...options} transition={{delay:0.2,}}>
        Celebrate Every Bite Where BURGIR Meet Perfection!
    </motion.h3>
</div>

<motion.a href="#menu"
initial={{
    y:"-100%",
    opacity:0,

}}
whileInView={{
    y:0,
    opacity:1,

}}
transition={{
    delay:0.4,
}}
>
    Explore Your Craving In Menu
</motion.a>
  </section>
  <Founders/>
  <Menu/>

  </>
  )
}

export default Home