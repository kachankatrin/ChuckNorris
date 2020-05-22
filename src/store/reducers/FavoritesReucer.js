import { ADD_JOKE, REMOVE_JOKE, OPEN_FAVORITES } from '../actions/Actions';
import { loadStateFromLocalStorage } from '../../utils';
const favoritesStore = {
  favoriteJokes: loadStateFromLocalStorage() || [],
  isFavoritesOpen: false,
  isDarkBg: false
}

export const favoritesReducer = (initialState = favoritesStore, action) => {

  if (action.type === ADD_JOKE) {
    return {
      ...initialState,
      favoriteJokes: [...initialState.favoriteJokes, action.payload] 
    }
  }
  if (action.type === REMOVE_JOKE) {
    const filteredFavorites = initialState.favoriteJokes.filter(joke => joke.id !== action.payload.remove)
    const isOpened = filteredFavorites.length > 0
    return {
      ...initialState,
      favoriteJokes: filteredFavorites,
      isDarkBg: isOpened,
      isFavoritesOpen: isOpened
    }
  }
  if (action.type === OPEN_FAVORITES) {
    return {
      ...initialState,
      isFavoritesOpen: !initialState.isFavoritesOpen,
      isDarkBg: !initialState.isDarkBg
    }
  }
  return initialState;
}