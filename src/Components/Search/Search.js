import { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [searchEmployee, setSearchEmployee] = useState('');
  const isDisplayButton =value.length>0

  const handleInputChange = (event) => {
    setSearchEmployee(event.target.value);
  };

  const handleClear = () => {
    setSearchEmployee("")
  };

  

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchEmployee}
        onChange={handleInputChange}
        
      />
      <button onChange={handleSearch}>Search</button>
      {isDisplayButton &&
      <button onClick={handleClear}>clear</button>}
    </div>

  );
};

/* Note : 
to filter out using name 
// const filterdName =employeesName.filter((employeename)=>{
  //return employeename.(objProperty).includes(searchEmployee)
  then filterdName.map(employeename)=> use map method 
})*/
