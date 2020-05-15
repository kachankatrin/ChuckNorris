import {
  DATA_LOADED, 
  CHANGE_RADIO, 
  SET_SEARCH_TYPE, 
  SELECT_CATEGORY, 
  CHANGE_INPUT, 
  ADD_JOKE, 
  REMOVE_JOKE, 
  SWITCH_PAGE, 
  LOCAL_STORAGE
} from '../actions/Actions'

const initStore = {
  joke: [],
  search: 'random',
  searchType: 'random',
  searchapi: 'random',
  category: '',
  textsearch: '',
  currentPage: 1
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
    }
  }
  if (action.type === CHANGE_INPUT) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.value,
      searchapi: initialState.search + action.payload.value
    }
  }
  if (action.type === SWITCH_PAGE) {
    return {
      ...initialState,
      currentPage: action.payload
    }
  }
  return initialState
}

const favoritesStore = {
  favoriteJokes: [],
}

export const favoritesReducer = (initialState = favoritesStore, action) => {

  if (action.type === ADD_JOKE) {
    return {
      ...initialState,
      favoriteJokes: [...initialState.favoriteJokes, action.payload] 
    }
  }
  if (action.type === REMOVE_JOKE) {
    return {
      ...initialState,
      favoriteJokes: initialState.favoriteJokes.filter(joke => joke.id !== action.payload)
    }
  }
  if (action.type === LOCAL_STORAGE) {
    return {
      ...initialState,
      favoriteJokes: [...action.payload]
    }
  }
  return initialState;
}