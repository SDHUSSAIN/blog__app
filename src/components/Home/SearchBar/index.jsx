import React from 'react';
import './styles.css';

const SearchBar = ({value,handleSearchKey,formSubmit,clearSearch}) => {
  return(
      <div className='searchBar__wrap'>
          <form >
              <input type="text" onChange={handleSearchKey} placeholder='Search by Category' value={value} />
              {value && <span onClick={clearSearch}>X</span>}
              <button onClick={formSubmit} >Go</button>
          </form>
      </div>
  )
};

export default SearchBar;
