import React from 'react'
import { Nav } from '../Nav/Nav'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const Home = () => {
  return (
    <div>
     <Nav/>
     <div>
      <h2>Welcome to Employees page</h2>
     </div>
     <div>
      <p>
         Duis ex dolor tempor qui reprehenderit ipsum dolore. Consequat et minim id veniam dolore pariatur sint ad pariatur officia tempor exercitation anim laborum. Sint tempor eiusmod commodo nulla commodo reprehenderit. Nulla occaecat cupidatat magna elit dolore sint dolore veniam Lorem sint. Cupidatat sunt excepteur dolore culpa non eu cupidatat labore qui et adipisicing.
      </p>
     </div>
     <div>
      <Button> <Link to="/login">LOGIN </Link></Button>
     </div>
    
     <div>
      <Button> <Link to="/register"> REGISTER</Link></Button>
     </div>
     

    </div>
  )
}

export default Home
