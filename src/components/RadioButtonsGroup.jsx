import React from 'react';
import SearchField from '../components/InputField';
import Categories from '../components/Categories';
import { categories } from '../utils';

function RadioButtons(props) {
  const {
    values,
    handleChange,
    stateSearchType,
    checkedCategory,
    handleRadio,
    value,
    handleInput,
    getJoke,
    getIndexOfLastJoke
  } = props;
  const keyPressed = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      getJoke();
      getIndexOfLastJoke();
    }
  }
  return (
    <form onKeyPress={keyPressed}>
      {values.map(item => {
        console.log(item.search)
        return (
          <div className='radio-container'>
            <label className='radiobutton'>
              <input
                type='radio'
                checked={item.checked}
                value={item.value}
                name={item.name}
                onChange={handleChange}
                onClick={item.changeSearchType}
              />
              {item.label}
            </label>
            {stateSearchType === 'textsearch' && item.name === 'textsearch'
              ? <SearchField value={value} handleInput={handleInput} />
              : null
            }
            {stateSearchType === 'categories' && item.name === 'categories'
              ? <Categories
                values={[
                  { value: categories[0], label: categories[0], checked: checkedCategory === categories[0] },
                  { value: categories[1], label: categories[1], checked: checkedCategory === categories[1] },
                  { value: categories[2], label: categories[2], checked: checkedCategory === categories[2] },
                  { value: categories[3], label: categories[3], checked: checkedCategory === categories[3] }
                ]}
                handleChange={handleRadio}
              />
              : null
            }
          </div>
        )
      })}
      <button type='button' className='result-button' onClick={() => { getJoke(); getIndexOfLastJoke() }}>Get a joke</button>
    </form>
  )
}
export default RadioButtons;