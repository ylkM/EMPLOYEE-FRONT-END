import React, { useContext, useState } from 'react'

import { EmployeeContext } from '../../EmployeeContext'

const EmployeeDetail = () => {
const {EmployeeInfo, setEmployeeInfo}= useContext(EmployeeContext)
  return (
    <div>
      <h2>Employee Detail</h2>
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
