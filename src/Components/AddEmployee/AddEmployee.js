import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Don't forget to import axios

const StyledInput = styled.input`
  padding: 5px 10px;
  line-height: 2;
  border: 1px solid #333;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  padding: 5px 10px;
  line-height: 2;
  border: 1px solid #333;
  border-radius: 4px;
  color: black;
  font-size: 16px; // Corrected property name
  background-color: transparent;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #2196f3;
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

  const requestURL = "http://localhost:3000/api/employees/employees";
  async function addEmployee() {
    try {
      const response = await axios.post(requestURL, employee);
      // Handle the response if needed
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee();
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
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "300px",
          margin: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <StyledButton type="submit">submit</StyledButton>
      </form>
    </>
  );
}
