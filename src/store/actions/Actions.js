
import { api } from '../../utils';
export const DATA_LOADED = 'DATA_LOADED';
export const CHANGE_RADIO  = 'CHANGE_RADIO';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const CHANGE_INPUT = 'CHANGE_INPUT';

export const getJoke = (checkedValue) => {
  if (checkedValue === null) {
    return {type: DATA_LOADED, payload: 'null'}
  }
  // if (checkedValue.includes('search')) {
    
  // }
  return async(dispatch) => {
    const data = await fetch(`${api}/${checkedValue}`);
    console.log(data)
    const json = await data.json();
    console.log(json)
    // const jokes = []
    // const result = checkedValue.includes('search') ? json.result.map(item => {console.log(item.value); return jokes.push({value: item.value})}) : jokes.push({value: json.value});
    // console.log(jokes)
    const result = checkedValue.includes('search') ? json.result : [json];
    // console.log(result)
    const res = await dispatch({ type: DATA_LOADED, payload: result});
    console.log(res)
  }
}

export const handleRadio = (e, key) => {
  console.log(e.target)
  return {
    type: CHANGE_RADIO,
    payload: { value: e.target.value, key }
  }
}
export const changeSearchType = (e, searchType) => {
  console.log(e)
  return {
    type: SET_SEARCH_TYPE,
    payload: {type: e.target.name, searchType}
  }
}
export const selectCategory = (e, key) => {
  return {
    type: SELECT_CATEGORY,
    payload: {value: e.target.value, key}
  }
}
export const handleInput = (e, key) => {
  return {
    type: CHANGE_INPUT,
    payload: { value: e.target.value, key }
  }
}