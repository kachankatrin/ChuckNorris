
import { api } from '../../utils';
export const DATA_LOADED = 'DATA_LOADED';
export const CHANGE_RADIO  = 'CHANGE_RADIO';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';

export const getData = (checkedValue) => {
  if (checkedValue === null) {
    return {type: DATA_LOADED, payload: 'null'}
  }
  return async(dispatch) => {
    const data = await fetch(`${api}/${checkedValue}`);
    console.log(data)
    const json = await data.json();
    console.log(json)
    const res = await dispatch({ type: DATA_LOADED, payload: json.value});
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