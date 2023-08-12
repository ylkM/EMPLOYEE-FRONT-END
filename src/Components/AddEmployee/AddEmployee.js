import React, { useEffect, useState } from "react";
import "./AddEmployee.css";

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    occupation: "",
    callMobile: "",
    callOffice: "",
    SMS: "",
    email: "",
    image: ""
  });

  const [records, setRecords] = useState([]);

  const updated = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const register = (e) => {
    e.preventDefault();
    console.log(employee);

    const updatedRecords = [...records, employee];
    setRecords(updatedRecords);
    localStorage.setItem("records", JSON.stringify(updatedRecords));

    // Clear input fields after submitting
    setEmployee({
      name: "",
      occupation: "",
      callMobile: "",
      callOffice: "",
      sms: "",
      email: "",
      image: ""
    });
  };

  useEffect(() => {
    const savedRecords = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(savedRecords);
  }, []);

  return (
    <div className="App">
      <form>
        <div>
          <h2>Add Employee</h2>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={updated}
            value={employee.name}
          />
        </div>
        <div>
          <input
            type="text"
            name="Occupation"
            placeholder="occupation"
            onChange={updated}
            value={employee.occupation}
          />
        </div>
        <div>
          <input
            type="number"
            name="callMobile"
            placeholder="callMobile"
            onChange={updated}
            value={employee.callMobile}
          />
        </div>
        <div>
          <input
            type="number"
            name="callOffice"
            placeholder="callOffice"
            onChange={updated}
            value={employee.callOffice}
          />
        </div>
        <div>
          <input
            type="text"
            name="SMS"
            placeholder="sms"
            onChange={updated}
            value={employee.sms}
          />
        </div>
        <div>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            onChange={updated}
            value={employee.email}
          />
        </div>
        <div>
          <input
            type="png"
            name="image"
            placeholder="image"
            onChange={updated}
            value={employee.image}
          />
        </div>
        <div>
          <button onClick={register}>Add Employee</button>
        </div>
      </form>
    </div>
  );
}
