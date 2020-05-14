import {DATA_LOADED, CHANGE_RADIO, SET_SEARCH_TYPE} from '../actions/Actions'

const initStore = {
  joke: null,
  search: 'random',
  searchType: 'random'
}
export const jokesReducer = (initialState = initStore,action) => {
  if (action.type === DATA_LOADED) {
    return {
      ...initialState,
      joke: action.payload
    }
  }
  if (action.type === CHANGE_RADIO) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.value
    }
  }
  if (action.type === SET_SEARCH_TYPE) {
    return {
      ...initialState,
      [action.payload.searchType]: action.payload.type
    }
  }
  return initialState
}