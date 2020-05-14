import React from 'react';
import SearchField from '../components/InputField';
function RadioButtons(props) {
  const { values, handleChange, stateSearchType } = props;
  return (
    <div>
      {values.map(item => {
        console.log(item.search)
        return (
          <div className='radiobutton'>
            <label className='radio-container'>
              {item.label}
              <input 
                type='radio'
                checked={item.checked}
                value={item.value}
                name={item.name}
                onChange={handleChange}
                onClick={item.changeSearchType}
              />
            </label>
            {stateSearchType === 'textsearch' && item.name === 'textsearch'
              ? <SearchField /> 
              : null 
            }
          </div>
        )
      })}
    </div>
  )
}
export default RadioButtons;