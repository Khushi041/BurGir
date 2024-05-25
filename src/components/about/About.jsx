import React from 'react';
import {Link} from "react-router-dom";
import {RiFindReplaceLine} from "react-icons/ri"
import me from "../../assets/me.jpeg"

const About = () => {
  return (
   <section className='about'>
    <main>
        <h1>
            About Us
        </h1>
        <article>
            <h4>Burgir</h4>
            <p>
                Welcome to BURGIR! where passion for gourmet meets culinary creativity.our journey began with the simple desire to elevate the burger experience,infusing each craetion with a dash of flair and a heap of flavor.<br/>

                At BURGIR, we pride ourselves on sourcing only the finest ingredients, from succulent beef patties to artisanal buns and hand-selected toppings.
                <br/>
                Join us on a gastronomic adventure, where every bite is a celebration of quality, taste, and the artistry of the BURGIR.</p>
                <br/>
                <p>Click Below To See The Menu</p>

                <Link to="/" >
                <RiFindReplaceLine/>
                </Link>
                 



           


        </article>


        <div>
            <h2>Founder</h2>
            <article>
                <div>
                <img src={me} alt = "Founder " /> 
                <h3>Khushi Parmar</h3>
                </div>
            </article>



        </div>
        <p>
            I am Khushi Parmar, the founder of BURGIR. Affiliated to Good Taste....
        </p>
    </main>


   </section>
  )
}

export default About;