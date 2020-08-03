import React from 'react';
// import Button from '@material-ui/core/Button';
import './Search.css';

const SearchBar = ({ handleOnChange }) => {
  return (
    <>
      <h1>Posts</h1>
      <input onChange={handleOnChange} placeholder="Search..." />
    </>
  );
};

export default SearchBar;
