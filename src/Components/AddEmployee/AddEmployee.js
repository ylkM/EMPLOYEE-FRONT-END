import React, { useState } from "react";
//import "./AddEmployee.css";
import styled from "styled-components";
const StyledInput = styled.input`
padding: 5px 10px;S
line-height:2;
border:none;
border :1px solid #333;
border-radius: 4px;
`;
const StyledButton = styled.button`
padding: 5px 10px;S
line-height:2;
border:none;
border :1px solid #333;
border-radius: 4px;
color:black;
fontsize:16px;
backgroundColor: transparent;
transition: all ease-in-out 0.4s;
cursor:pointer;
&:hover{
  color: white;
  background-color:#2196f3
}
`;
export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    occupation: "",
    cellMobile: "",
    cellOffice: "",
    sms: "",
    email: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setEmployee((em) => ({
      ...em,
      [e.target.name]: e.target.value,
    }));
  };
  //POST employees data to mongodb 
    const requestURL = "http://localhost:3000/api/employees/employees";
    async function addEmployee() {
      try {
        const response = await axios.post(requestURL,employee);
        //const data = await response.json()
      } catch (error) {
        console.error(error);
      }}
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee()
    // Clear input fields after submitting
    setEmployee({
      name: "",
      occupation: "",
      cellMobile: "",
      cellOffice: "",
      sms: "",
      email: "",
      imageURL: "",
    });
  };
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Add Employee
      </h2>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
          margin: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <StyledInput
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={employee.name}
        />

        <StyledInput
          type="text"
          name="occupation"
          placeholder="occupation"
          onChange={handleChange}
          value={employee.occupation}
        />

        <StyledInput
          type="number"
          name="cellMobile"
          placeholder="cellMobile"
          onChange={handleChange}
          value={employee.cellMobile}
        />

        <StyledInput
          type="number"
          name="cellOffice"
          placeholder="cellOffice"
          onChange={handleChange}
          value={employee.cellOffice}
        />

        <StyledInput
          type="text"
          name="sms"
          placeholder="sms"
          onChange={handleChange}
          value={employee.sms}
        />

        <StyledInput
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />

        <StyledInput
          type="pnp"
          name="imageURL"
          placeholder="image"
          onChange={handleChange}
        />

        <StyledButton>submit</StyledButton>
      </form>
    </>
  );
}
