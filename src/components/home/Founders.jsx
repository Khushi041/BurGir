import React from 'react'
import {motion} from "framer-motion";
import me from "../../assets/me.jpeg";

const Founders = () =>{

    const options = {
        initial :{
            x:"-100%",
            opacity:0

        },
        whileInView:{
            x:0,
            opacity:1,

        }
    }
    return (
    <section className='founder'>
        <motion.div
        {...options}
        >
            <img src ={me} alt = "Founders" height={200} width={200} />
            <h3>Khushi Parmar</h3>
            <p>Hey Burgiers! I am founder of Burgir.<br/>

            Our Aim is to create an immersive destiantion where burger enthusiasts can explore our mouthwatering menu, engage with our brand story, and seamlessly have their favourite BURGIR.
                 </p>

        </motion.div>

    </section>
    )
}

export default Founders