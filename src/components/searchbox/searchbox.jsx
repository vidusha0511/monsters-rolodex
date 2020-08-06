import React from 'react';
import './searchbox.css';

const SearchBox = ({ placeholder, handlechange }) => (
    <input type="search" placeholder={placeholder}  className="search" onChange={handlechange} />
);

export default SearchBox;