
import { api } from '../../utils';
export const DATA_LOADED = 'DATA_LOADED';
export const CHANGE_RADIO  = 'CHANGE_RADIO';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const ADD_JOKE = 'ADD_JOKE';
export const REMOVE_JOKE = 'REMOVE_JOKE';
export const SWITCH_PAGE = 'SWITCH_PAGE';
export const LOCAL_STORAGE = 'LOCAL_STORAGE';

export const getJoke = (checkedValue) => {
  if (checkedValue === '') {
    return {type: DATA_LOADED, payload: 'null'}
  }
  return async(dispatch) => {
    const data = await fetch(`${api}/${checkedValue}`);
    console.log(data)
    const json = await data.json();
    console.log(json)
    const result = checkedValue.includes('search') ? json.result : [json];
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
export const addJoke = (joke) => {
  return {
    type: ADD_JOKE,
    payload: joke
  }
}
export const removeJoke = (joke) => {
  return {
    type: REMOVE_JOKE,
    payload: joke.id
  }
}
export const stateLocalExchange = (arr) => {
  return {
    type: LOCAL_STORAGE,
    payload: arr
  }
}
export const paginate = (page) => {
  return {
    type: SWITCH_PAGE,
    payload: page
  }
}