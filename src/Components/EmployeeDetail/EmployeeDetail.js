import React, { useContext, useState } from 'react'

import { EmployeeContext } from '../../EmployeeContext'

const EmployeeDetail = () => {
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

export default EmployeeDetail
// THIS IS SUPPOSED TO BE IMPLOYEELIST ITEM COMP, INSTEAD 
