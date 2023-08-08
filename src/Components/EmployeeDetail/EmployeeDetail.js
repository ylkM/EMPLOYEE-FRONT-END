import React, { useState } from 'react'
import {useContext} from "react"
import { EmployeeContext } from '../../EmployeeContext'

const EmployeeDetail = () => {
  const {EmployeeInfo, setEmployeeInfo}= useState(EmployeeContext)
  return (
    <div>
      {EmployeeInfo.map(({name,occupation,image,callMobile,callOffice, sms, email})=>{
        return (
          <div>
            <img src={image} alt='image'/>
            {name},
            {occupation}
            {callMobile}
            {callOffice}
            {sms}
            {email}

          </div>
          

        )
      })}
    </div>
  )
}

export default EmployeeDetail
