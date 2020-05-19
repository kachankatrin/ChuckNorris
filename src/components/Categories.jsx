import React from 'react';

function Categories(props) {
  const { values, handleChange } = props;
  const style = {backgroundColor: '#F8F8F8', color: '#333333'};
  return (
    <div className='flex-container categories-container'>
      {values.map(item => {
        return (
          <div className='categories-radio-container'>
            <label className='radiobutton-categories' style={item.checked ? style : null}>
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