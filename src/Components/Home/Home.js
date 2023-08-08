import React from 'react'
import { Nav } from '../Nav/Nav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
     <Nav/>
     <div>
      <h2>Welcome to Employees page</h2>
     </div>
     <div>
      <p>This shows detail information about each employee </p>
     </div>
     <div>
      <button> <Link to="/login">LOGIN </Link></button>
     </div>
    
     <div>
      <button> <Link to="/register"> REGISTER</Link></button>
     </div>
     

    </div>
  )
}

export default Home
