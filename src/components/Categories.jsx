import React from 'react';

function Categories(props) {
  const { values, handleChange } = props;
  return (
    <div>
    {values.map(item => {
      return (
        <div className='radiobutton'>
          <label className='radio-container'>
            {item.label}
            <input
              type='radio'
              // name={item.name}
              checked={item.checked}
              value={item.value}
              onChange={handleChange}
            />
          </label>
        </div>
      )
    })}
    </div>
  )
}

export default Categories;