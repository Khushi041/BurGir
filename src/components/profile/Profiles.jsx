import React from 'react';
import {motion} from "framer-motion";
import me from "../../assets/me.jpeg";
import {Link} from "react-router-dom";
import {MdSpaceDashboard} from "react-icons/md";

const Profiles = () => {

    const options = {
        initial:{
            y:"-100%",
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,
        }
    };
  return (
    <section className='profile'>
       <main>
        <motion.img src={me} alt ="User" {...options} />
        <motion.h5 {...options} transition={{
            delay:0.3
        }}>
            khushi
         </motion.h5>

         <motion.div {...options} transition={{delay:0.5}}

         >
           <Link to ="/admin/dashboard" style={{
            borderRadius:0,
            backgroundColor:"rgb(40,40,40)",
           }}>
            <MdSpaceDashboard />Dashboard</Link> 

         </motion.div>
         
         <motion.div initial=
         {{
            x:"-100vw",
            opacity:0,
         }} 
         animate={{
            x:0,
            opacity:1,

         }}


>
  <Link to ="/myorders">Orders</Link> 

</motion.div>

<motion.button initial=
         {{
            x:"-100vw",
            opacity:0,
         }} 
         animate={{
            x:0,
            opacity:1,

         }}
         transition={{delay:0.3}}


>
Logout
</motion.button>






    
       </main>
        </section>
  )
}

export default Profiles