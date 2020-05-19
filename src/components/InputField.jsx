import React from 'react';

function SearchField(props) {
  return (
    <input 
      type='search' 
      onChange={props.handleInput} 
      value={props.value} 
      placeholder='Free text search...' 
    />
  )
}
export default SearchField;