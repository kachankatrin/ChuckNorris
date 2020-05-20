
import { api } from '../../utils';
export const DATA_LOADED = 'DATA_LOADED';
export const CHANGE_RADIO  = 'CHANGE_RADIO';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const ADD_JOKE = 'ADD_JOKE';
export const REMOVE_JOKE = 'REMOVE_JOKE';
export const SWITCH_PAGE = 'SWITCH_PAGE';
export const INDEX_OF_LAST_JOKE = 'INDEX_OF_LAST_JOKE';
export const OPEN_FAVORITES = 'OPEN_FAVORITES';
export const CLOSE_DARK_BG = 'CLOSE_DARK_BG';

export const getJoke = (checkedValue) => {
  return async(dispatch) => {
    const data = await fetch(`${api}/${checkedValue}`);
    const json = await data.json();
    const success = checkedValue.includes('search') ? json.result : [json];
    const result = data.ok ? success : [json.violations];
    const res = await dispatch({ type: DATA_LOADED, payload: result});
  }
}
export const handleRadio = (e, key) => {
  console.log(e.target.checked)
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
  return async (dispatch) => {
    // add joke to localStorage

    dispatch({
      type: ADD_JOKE,
      payload: joke
    })
  }
}
export const removeJoke = (joke) => {
  return {
    type: REMOVE_JOKE,
    payload: {remove: joke.id}
  }
}
export const paginate = (page) => {
  return {
    type: SWITCH_PAGE,
    payload: page
  }
}
export const getIndexOfLastJoke = () => {
  return {
    type: INDEX_OF_LAST_JOKE
  }
}
export const handleFavoritesOpen = (e) => {
  return {
    type: OPEN_FAVORITES
  }
}
export const closeDarkBg = () => {
  return {
    type: CLOSE_DARK_BG
  }
}