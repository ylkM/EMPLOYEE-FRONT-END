import React from 'react';
import './Wrapper.css'; 
const Wrapper = ({ children }) => {
  return <div className="wrapper" style={{
    backgroundColor:"#f4f4f4",
    maxWidth:"1200px",
    height:"90vh",
    margin:"5rem auto",
    padding:"3rem 0rem"
  }}>
    {children}
    </div>;
}

export default Wrapper;
