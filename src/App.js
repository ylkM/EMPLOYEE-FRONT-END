import React from 'react'; // Don't forget to import React!
import { Routes, Route } from 'react-router-dom';
import AddEmployee from './Components/AddEmployee/AddEmployee';
import Employee from './Components/Employee/Employee';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import EmployeeListPage from './Components/EmployeeListPage.js/EmployeeListPage';
import LogOut from './Components/LogOut';
import { NavBar } from './Components/Nav/Nav'; // Make sure this import is correct
import Search from './Components/Search/Search';
import Signup from './Components/Signup/Signup';
import Wrapper from './Components/Wrapper/Wrapper';
import Home from "./Components/Home/Home"
import { ContextProvider } from './EmployeeContext';
import { NotFound } from './Components/NotFound/NotFound';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Components/Theming/GlobalStyle';
import HomePage from './HomePage/HomePage';
import AddEmployeePage from './Components/AddEmployeePage/AddEmployeePage'; // Correct the path
import { Login } from "./Components/Login/Login"; // Correct the import


function App() {
  return (
    <ThemeProvider>
      <GlobalStyle/>
      <ContextProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={
            <Wrapper> {/* Use <Wrapper> instead of <wrapper> */}
              <HomePage/>
            </Wrapper>}> 
          </Route>
          <Route path='/AddEmployee' element={
            <Wrapper>
              <AddEmployeePage/>
            </Wrapper>}/>
          <Route path='/employeeList' element={
            <Wrapper>
              <EmployeeListPage/>
            </Wrapper>
          }/>
          <Route path='/logout' element={
            <Wrapper> {/* Use <Wrapper> instead of <wrapper> */}
              <LogOut/>
            </Wrapper>}/>
          <Route path='/signup' element={
            <Wrapper> {/* Use <Wrapper> instead of <wrapper> */}
              <Signup/>
            </Wrapper>}/>
        </Routes>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
