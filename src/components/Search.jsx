import React from 'react';
import RadioButtons from './RadioButtonsGroup'
function Search(props){
  const query = 'chuck'; //temporary
  const category = 'animal'; //temporary
    return (
      <div>
        <RadioButtons 
          values ={[
            {name: 'random', 
              value: 'random', 
              label: 'Random', 
              checked: props.checkedValue === 'random', 
              changeSearchType: (e)=>{props.changeSearchType(e, 'searchType')}
            },
            {name: 'categories', 
              value: `random?category=${category}`, 
              label: 'From categories', 
              checked: props.checkedValue === `random?category=${category}`, 
              changeSearchType: (e)=>{props.changeSearchType(e, 'searchType')}
            },

            {name: 'textsearch', 
              value: `search?query=${query}`, 
              label: 'Search', 
              checked: props.checkedValue === `search?query=${query}`, 
              changeSearchType: (e)=>{props.changeSearchType(e, 'searchType')}
            }
          ]}
          stateSearchType = {props.stateSearchType}
          handleChange={(e) => {props.handleRadio(e, 'search')}}
        />
      </div>
    )
}
export default Search;