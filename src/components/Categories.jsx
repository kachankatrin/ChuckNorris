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