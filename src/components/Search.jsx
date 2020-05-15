import React from 'react';
import RadioButtons from './RadioButtonsGroup';
function Search(props){
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
              value: `random?category=`, 
              label: 'From categories', 
              checked: props.checkedValue === `random?category=`, 
              changeSearchType: (e)=>{props.changeSearchType(e, 'searchType')}
            },
            {name: 'textsearch', 
              value: `search?query=`, 
              label: 'Search', 
              checked: props.checkedValue === `search?query=`, 
              changeSearchType: (e)=>{props.changeSearchType(e, 'searchType')}
            }
          ]}
          stateSearchType = {props.stateSearchType}
          handleChange={(e) => {props.handleRadio(e, 'search')}}
          checkedCategory={props.checkedCategory}
          handleRadio={(e) => {props.selectCategory(e, 'category')}}
          value={props.value}
          handleInput={props.onChange}
          getJoke={props.getJoke}
        />
      </div>
    )
}
export default Search;