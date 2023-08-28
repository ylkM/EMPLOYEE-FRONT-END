import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContext } from '../../EmployeeContext';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import Box from '@mui/material'; // Removed duplicate import
// Removed duplicate "styled-components" import

const EmployeeListItem = () => {
  const { EmployeeInfo } = useContext(EmployeeContext); // Removed unnecessary "setEmployeeInfo"

  return (
    <>
      {EmployeeInfo.map(({ name, occupation, imageURL, cellMobile, cellOffice, sms, email }, index) => (
        <StyledEmployeeListItem key={index} elevation={6}>
          <img style={StyledImage} src={imageURL} alt="person" /> {/* Fixed image variable */}
          <div>
            <h4>{name}</h4> {/* Removed unnecessary inline style */}
            <p>{occupation}</p>
            <p>{cellMobile}</p>
            <p>{cellOffice}</p>
            <p>{sms}</p>
            <p>{email}</p>
          </div>
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
