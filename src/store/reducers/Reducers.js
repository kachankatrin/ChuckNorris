import {
  DATA_LOADED, 
  CHANGE_RADIO, 
  SET_SEARCH_TYPE, 
  SELECT_CATEGORY, 
  CHANGE_INPUT, 
  ADD_JOKE, 
  REMOVE_JOKE, 
  SWITCH_PAGE, 
  INDEX_OF_LAST_JOKE,
  OPEN_FAVORITES,
} from '../actions/Actions';
import { loadStateFromLocalStorage } from '../../utils';

const initStore = {
  jokes: [],
  search: 'random',
  searchType: 'random',
  searchapi: 'random',
  category: '',
  textsearch: '',
  currentPage: 1,
  jokesPerPage: 5,
  indexOfLastJoke: null,
  currentDate: Date.now(),
  isFavoritesOpen: false,
  isDarkBg: false,
}
export const jokesReducer = (initialState = initStore, action) => {
  if (action.type === DATA_LOADED) {
    console.log(action.payload)
    return {
      ...initialState,
      jokes: action.payload,
      textsearch: '',
      currentPage: 1,
      indexOfLastJoke: 1 * initialState.jokesPerPage,
      searchapi: initialState.search + ''
    }
  }
  if (action.type === CHANGE_RADIO) {
    return {
      ...initialState,
      [action.payload.key]: action.payload.value,
      searchapi: action.payload.value
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
  if (action.type === INDEX_OF_LAST_JOKE) {
    return {
      ...initialState,
      indexOfLastJoke: initialState.currentPage * initialState.jokesPerPage
    }
  }
  if (action.type === OPEN_FAVORITES) {
    return {
      ...initialState,
      isFavoritesOpen: !initialState.isFavoritesOpen,
      isDarkBg: !initialState.isDarkBg
    }
  }
  return initialState
}

const favoritesStore = {
  favoriteJokes: loadStateFromLocalStorage() || []
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
  return initialState;
}