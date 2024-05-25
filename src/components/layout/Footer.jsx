import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from "react-icons/ai"

const Footer = () => {
    return (
        <footer>

            <div>
                <h2>
                    BURGIR
                </h2>
                <p>                 We Are Trying To Give You The Best Taste Possible :)
                    <br/>
                    <em>
                        We Give Attention To Your Genuine Feedback On Burgir
                    </em>
                    <strong>
                        All Right Received @burgirthetaste
                    </strong>
</p>



            </div>
            <aside>
                <h4>Follow Us</h4>
                <a
                 href =" https://www.linkedin.com/in/parmar-khushi-774008222/"> <AiFillLinkedin/>
                 
                 </a>

                <a href = "https://linkden.com/"
                ><AiFillInstagram/>

                </a>
                
                <a href = "https://github.com/Khushi041"
                ><AiFillGithub/>
                </a>

            </aside>
        </footer>
    )
}

export default Footer