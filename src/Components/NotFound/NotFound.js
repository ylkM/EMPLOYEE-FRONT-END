import React from 'react'
import { Link } from 'react-router-dom'
export const NotFound = () => {
  return (
    <div>
      <h2>page is not found</h2>
      <p> go to <Link to="/"> HomePage</Link></p>
    </div>
  )
}

