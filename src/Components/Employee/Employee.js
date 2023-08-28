import React from 'react'
import HomePage from '../../HomePage/HomePage'

function Employee(props) {
  return (
    <div><HomePage employeesData ={props.employeesData}/></div>
  )
}

export default Employee
