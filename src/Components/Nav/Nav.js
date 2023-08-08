import React from 'react';
import './Nav.css'; 
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <Nav className="nav">
      <h2>Employee</h2>
      <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/AddEmployee">AddEmployee</Link></li>
       <li><Link to="/employeeList">EmployeeList</Link></li>
        <li><Link to="/logout">LogOut</Link></li>
      </ul>
    </Nav>
  );
}
