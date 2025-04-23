import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="text-left">
        <input
         
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search expenses..."
          className="seachBar w-40 h-10 pl-10 pr-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
       
      </div>
    );
  }
  
  export default SearchBar;