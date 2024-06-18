import React, { usestate } from 'react';
import searchicon from "../assets/searchicon.svg"

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const searchMeal = (event) => {
      setSearchTerm(event.target.value);
      onSearch(event.target.value);
    };

    return (
        <div classname="flex justify-center mt-4 relative w-full max-w-md">
          <div classname="absolute inset-y-0 left-0 pl-6 flex items-conter pointer-events-none">
          <img src={searchicon} alt="Search Icon" className='h-4 w-4 '/>
          </div>
          <input type="text" 
          placeholder='Search for a meal' 
          value={searchTerm} 
          onChange={searchMeal} 
          className='w-[375px] h-[76px] pl-12 py-2 mr-10 border-gray '/>
        </div>

    );
  };

  export default SearchBar;