import React from 'react'

import React, { useContext, useState } from 'react'

import { EmployeeContext } from '../../EmployeeContext'

const EmployeeListItem = () => {
const {EmployeeInfo, setEmployeeInfo}= useContext(EmployeeContext)
  return (
    <div>
      <h2>Employee Detail</h2>
      {EmployeeInfo.map(({name,occupation,imageURL,cellMobile,cellOffice, sms, email})=>{
        return (
          <div>
            <img src={imageURL} alt='image'/>
            {name},
            {occupation}
            {cellMobile}
            {cellOffice}
            {sms}
            {email}

          </div>
          

        )
      })}
    </div>
  )
}

export default EmployeeListItem
