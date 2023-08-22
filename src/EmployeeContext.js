import React, {createContext ,useEffect,useState } from "react";
 export const EmployeeContext =createContext(); //  export to use it 

export const ContextProvider =(props)=>{
 const[EmployeeInfo, setEmployeeInfo]= useState([])
 const requestURL ="http://localhost:3000/api/employees/employees"
 //const fetchEmployees = async()=>{
   // const response = await fetch(requestURL)
   // const data =await response.json()
  // setEmployeeInfo(data)
 //}
async function fetchEmployees() {
  try {
    const response = await axios.get(requestURL);
    //const data = await response.json()
    setEmployeeInfo(response.data)
  } catch (error) {
    console.error(error);
  }
}
 useEffect (()=>{
  fetchEmployees() // calling 
 },[])

return(
    <EmployeeContext.Provider value={{EmployeeInfo, setEmployeeInfo}}>
     {props.children}

    </EmployeeContext.Provider>
)
}
