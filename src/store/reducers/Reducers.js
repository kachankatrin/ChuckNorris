import {DATA_LOADED, CHANGE_RADIO, SET_SEARCH_TYPE, SELECT_CATEGORY, CHANGE_INPUT} from '../actions/Actions'

const initStore = {
  joke: [],
  search: 'random',
  searchType: 'random',
  searchapi: 'random',
  category: '',
  textsearch: ''
}
export const jokesReducer = (initialState = initStore, action) => {
  if (action.type === DATA_LOADED) {
    console.log(action.payload)
    return {
      ...initialState,
      joke: action.payload
    }
  }
  if (action.type === CHANGE_RADIO) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.value,
      searchapi: action.payload.value,
    }
  }
  if (action.type === SET_SEARCH_TYPE) {
    return {
      ...initialState,
      [action.payload.searchType]: action.payload.type,
      textsearch: '',
      category: ''
    }
  }
  if (action.type === SELECT_CATEGORY) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.value,
      searchapi: initialState.search + action.payload.value,
      // textsearch: ''
    }
  }
  if (action.type === CHANGE_INPUT) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.value,
      searchapi: initialState.search + action.payload.value
    }
  }
  return initialState
}