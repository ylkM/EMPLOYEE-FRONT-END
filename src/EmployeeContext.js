import React, { useState } from "react";
import { EmployeesInfo } from "./Components/ContextFile/EmployeeInfo";
 export const EmployeeContext =React.createContext(); //  export to use it 

export const ContextProvider =(props)=>{
 const[EmployeeInfo, setEmployeeInfo]= useState({EmployeesInfo})

return(
    <EmployeeContext.Provider value={{EmployeeInfo, setEmployeeInfo}}>
     {props.children}

    </EmployeeContext.Provider>
)
}