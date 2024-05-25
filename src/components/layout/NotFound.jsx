import React from 'react';
import {MdError} from "react-icons/md";
import {Link} from "react-router-dom"; 
const NotFound = () => {
  return (
   <section className='notFound'>
    <main>
        <div>
        <MdError/>
        <h4>404
        </h4>
        </div>
        <p>Page not found, click below to go to Home page</p>
        <Link to ="/">Go To Home</Link>
        
   
    </main>
    

   </section>
  )
}

export default NotFound