
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import AddEmployee from './Components/AddEmployee/AddEmployee';
import Employee from './Components/Employee/Employee';
import EmployeeList from './Components/EmployeeList/EmployeeList';

import LogOut from './Components/LogOut';
import { Nav } from './Components/Nav/Nav';
import Search from './Components/Search/Search';
import Signup from './Components/Signup/Signup';
import Wrapper from './Components/Wrapper/Wrapper';
import Home from "./Components/Home/Home"
//import Login from './Components/Login/Login';
//import Register from './Components/Register/Register';
import { ContextProvider } from './EmployeeContext';
import { NotFound } from './Components/NotFound/NotFound';

function App() {
  return (
    
    <Wrapper className="App" >
      <ContextProvider>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}> 
        <Route path='/login' element ={<Login/>}/>
        <Route path='/register' element ={<Register/>}/>
        </Route>
          <Route path='/AddEmployee' element={<AddEmployee/>}/>
          <Route path='/employeeList' element={<EmployeeList/>}/>
          <Route path='/logout' element={<LogOut/>}/>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
        <Search/>
          <Employee/>
          <AddEmployee/>
          <EmployeeList/>
          <LogOut/>
          <Signup/>
      </ContextProvider>
    </Wrapper>
     
  );
}

export default App;
