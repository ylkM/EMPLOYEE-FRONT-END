import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContext } from '../../EmployeeContext';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import {Delete, Edit} from "@mui/icons-material"
import Box from '@mui/material'; 
import axios from 'axios';

const StyledAction = styled.div`
display: flex;
justify-content: space-between
align-items: center;
width:100%;
`
const StyledDeleteIcon= styled(Delete)`
margin: 0 5px;
color:red;
cursor: pointer;
`
const StyledEditIcon =styled(Edit)`
margin: 0 5px;
color :blue;
cursor: pointer;
`
const handleDelete =(employeeId)=>{
axios.delete(`http://localhost:3000/api/employees/employees ${employeeId}`).then (()=>{
  alert("employee deleted successfully ")
  setEmployees(preEmployees =>preEmployees.filter(employee =>employee._id=== employeeId))
}).catch(error=>{
onsole.log("failed to delete :", error )
})
}

const handleEdit =()=>{

}
const EmployeeListItem = () => {
  const { EmployeeInfo } = useContext(EmployeeContext); 
  return (
    <>
      {EmployeeInfo.map(({ name, occupation, imageURL, cellMobile, cellOffice, sms, email ,_id}, index) => (
        <StyledEmployeeListItem key={index} elevation={6}>
          <img style={StyledImage} src={imageURL} alt="person" />
          <StyledAction>
           <div>
            <h4>{name}</h4> 
            <p>{occupation}</p>
            <p>{cellMobile}</p>
            <p>{cellOffice}</p>
            <p>{sms}</p>
            <p>{email}</p>
          </div>
          <div>
            <StyledEditIcon onClick={handleEdit}/>
            <StyledDeleteIcon onClick={()=>handleDelete(_id)}/>
          </div>
          </StyledAction>
        </StyledEmployeeListItem>
      ))}
    </>
  );
};

const StyledEmployeeListItem = styled(Paper)`
  display: flex; /* Removed unnecessary quotes */
  align-items: center;
  gap: 10px;
  padding: 0.5rem;
  width: 50%;
  margin-bottom: 0.5rem;
`;

const StyledImage = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
};

export default EmployeeListItem;
