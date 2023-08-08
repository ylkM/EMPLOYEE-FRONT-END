import { useState } from 'react';
import "./Register.css"
const Register = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [email, setEmail] = useState('');
  const [cellOffice, setCellOffice] = useState('');
  const [cellMobile, setCellMobile] = useState('');
  const [sms, setSms] = useState(false);
  const [occupation, setOccupation] = useState('');

  const handleEmployeeNameChange = (e) => {
    setEmployeeName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCellOfficeChange = (e) => {
    setCellOffice(e.target.value);
  };

  const handleCellMobileChange = (e) => {
    setCellMobile(e.target.value);
  };

  const handleSmsChange = (e) => {
    setSms(e.target.checked);
  };

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the registration logic, e.g., sending data to a server
    console.log({
      employeeName,
      email,
      cellOffice,
      cellMobile,
      sms,
      occupation,
    });
    // Clear form fields after submission
    setEmployeeName('');
    setEmail('');
    setCellOffice('');
    setCellMobile('');
    setSms(false);
    setOccupation('');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={employeeName}
            onChange={handleEmployeeNameChange}
            placeholder='Employee Name'
          />
        </div>
        <div>
          <input type="email" 
          value={email}
           placeholder="email" 
          onChange={handleEmailChange} />
        </div>
        <div>
          
          <input
            type="text"
            placeholder='cell Office'
            value={cellOffice}
            onChange={handleCellOfficeChange}
          />
        </div>
        <div>
         
          <input
            placeholder='cell Mobile'
            type="text"
            value={cellMobile}
            onChange={handleCellMobileChange}
          />
        </div>
        <div>
         
            <input
              placeholder=' Receive SMS'
              type="checkbox"
              checked={sms}
              onChange={handleSmsChange}
            />
           
         
        </div>
        <div>
         
          <input
            type="text"
            placeholder='Occupation'
            value={occupation}
            onChange={handleOccupationChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
