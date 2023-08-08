import React from 'react';
import "./AddEmployee.css"
import { Nav } from '../Nav/Nav';
const AddEmployee = () => {
  return (
    <div> 
     <Nav/>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" required placeholder='name'/><br /><br />

      <label htmlFor="occupation">Occupation:</label>
      <input type="text" id="occupation" required placeholder='Occupation' /><br /><br />

      <label htmlFor="cellMobile">Cell Mobile:</label>
      <input type="tel" id="cellMobile" required placeholder='cellMobile'/><br /><br />

      <label htmlFor="cellOffice">Cell Office:</label>
      <input type="tel" id="cellOffice" placeholder='cellOffice'/><br /><br />

      <label htmlFor="sms">SMS:</label>
      <input type="text" id="sms" placeholder='sms'/><br /><br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" required placeholder='email'/><br /><br />

      <label htmlFor="imageUrl">Image URL:</label>
      <input type="url" id="imageUrl" placeholder='Image'/><br /><br />

      <button type="submit" id="addEmployeeButton">Submit</button>
    </form>
    </div>
  );
}

export default AddEmployee;
