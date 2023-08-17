import { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [searchEmployee, setSearchEmployee] = useState('');
  const isDisplayButton = searchEmployee.length > 0;

  const handleInputChange = (event) => {
    setSearchEmployee(event.target.value);
  };

  const handleClear = () => {
    setSearchEmployee('');
  };

  const handleSearch = () => {
    onSearch(searchEmployee);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchEmployee}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      {isDisplayButton && <button onClick={handleClear}>Clear</button>}
    </div>
  );
};
