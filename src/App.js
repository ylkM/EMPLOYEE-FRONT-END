
import { Routes ,Route} from 'react-router-dom';
import AddEmployee from './Components/AddEmployee/AddEmployee';
import Employee from './Components/Employee/Employee';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import EmployeeListPage from './Components/EmployeeListPage/EmployeeListPage';

import LogOut from './Components/LogOut';
import { NavBar } from './Components/Nav/Nav'; //
import Search from './Components/Search/Search';
import Signup from './Components/Signup/Signup';
import Wrapper from './Components/Wrapper/Wrapper';
import Home from "./Components/Home/Home"
//import Login from './Components/Login/Login';
//import Register from './Components/Register/Register';
import { ContextProvider } from './EmployeeContext';
import { NotFound } from './Components/NotFound/NotFound';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Components/Theming/GlobalStyle';
import HomePage from './HomePage/HomePage';
import AddEmployeePage from './Components/AddEmployee/AddEmployeePage/AddEmployeePage';
import AddEmployee from './Components/AddEmployee/AddEmployee';
import { Login } from "./Components/Login/Login"
import EmployeeDetail from './Components/EmployeeDetail/EmployeeDetail';
import EmployeeListItem from './Components/EmployeeListItem/EmployeeListItem';

function App() {
  return (
    <ThemeProvider>
    <GlobalStyle/>
    
      <ContextProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={
        <wrapper> 
          <HomePage/>
        </wrapper>}> 
        </Route>
          <Route path='/AddEmployee' element={
          <Wrapper>
            <AddEmployeePage/>
            </Wrapper>}/>
          <Route path='/employeeList' element={
          <Wrapper><EmployeeListPage/> </Wrapper>
          }/>
          <Route path='/logout' element={
          
          <wrapper> <LogOut/>
          </wrapper>}/>
          <Route path='/signup' element={
          
          <wrapper>  
            <Signup/>
          </wrapper>}/>
      </Routes>
      </ContextProvider>
 
     </ThemeProvider>
  );
}

export default App;
