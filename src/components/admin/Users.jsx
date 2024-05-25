import React from 'react'
// import { AiOutlineEye } from 'react-icons/ai';
// import {Link} from "react-router-dom";
import me from "../../assets/me.jpeg";

const Users = () => {

    const arr = [1,2,3,4];
  return (
    <section className="tableClass">
    <main>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Role</th>
            <th>Since</th>
        
          </tr>
        </thead>

        <tbody>
          {arr.map((i) => (
            <tr key={i}>
              <td>#sdkfsdfdsf</td>
              <td>Khushi</td>
              <td>
                <img src = {me} alt ="User" />




              </td>
              <td>Admin</td>
              <td>{"10-12-2010"}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  </section>
);
  
}

export default Users