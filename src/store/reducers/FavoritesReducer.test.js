import { favoritesReducer } from './FavoritesReucer';
import * as types from '../actions/Actions';

describe('favorite jokes reducer', () => {
  const randomJoke = { 
    categories: [],
    created_at: "2020-01-05 13:42:28.984661",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "KwlaIFD3Qh2nv_T9uQQm1w",
    updated_at: "2020-01-05 13:42:28.984661",
    url: "https://api.chucknorris.io/jokes/KwlaIFD3Qh2nv_T9uQQm1w",
    value: "I dared to look Chuck Norris in the eye - now I don't have a soul."
  };
  const animalJoke = {
    categories: ["animal"],
    created_at: "2020-01-05 13:42:19.576875",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "xwjic1sws_yohsfefndaiw",
    updated_at: "2020-01-05 13:42:19.576875",
    url: "https://api.chucknorris.io/jokes/xwjic1sws_yohsfefndaiw",
    value: "Chuck Norris once kicked a horse in the chin. Its decendants are known today as Giraffes."
  }
  it('should rerturn initial state', () => {
    expect(favoritesReducer(undefined, {})).toEqual({
      favoriteJokes: [],
      isFavoritesOpen: false,
      isDarkBg: false
    })
  })
  
  it('should add a joke to the favorite jokes', () => {
    const initialState = {
      favoriteJokes: []
    }
    const action = {
      type: types.ADD_JOKE,
      payload: randomJoke
    }
    expect(favoritesReducer(initialState, action)).toMatchObject({
      favoriteJokes: [...initialState.favoriteJokes, action.payload]
    })
  })

  it('should remove joke from favorite jokes', () => {
    const initialState = {
      favoriteJokes: [],
      isDarkBg: false,
      isFavoritesOpen: false
    }
    const action = {
      type: types.REMOVE_JOKE,
      payload: {remove: "KwlaIFD3Qh2nv_T9uQQm1w"}
    }
    expect(favoritesReducer(undefined, action)).toMatchObject({
      favoriteJokes: initialState.favoriteJokes.filter(joke => joke.id !== 'KwlaIFD3Qh2nv_T9uQQm1w')
    })
  })

  it('should remove last joke from favorites and close favorites modal', () => {
    const initialState = {
      favoriteJokes: [randomJoke],
      isDarkBg: true,
      isFavoritesOpen: true
    }
    const action = {
      type: types.REMOVE_JOKE,
      payload: {remove: "KwlaIFD3Qh2nv_T9uQQm1w"}
    }
    expect(favoritesReducer(initialState, action)).toMatchObject({
      favoriteJokes: [],
      isDarkBg: false ,
      isFavoritesOpen:  false
    })

  })

  it('should remove not last joke from favorites and leave favorites opened', () => {
    const initialState = {
      favoriteJokes: [randomJoke, animalJoke]
    }
    const action = {
      type: types.REMOVE_JOKE,
      payload: {remove: "KwlaIFD3Qh2nv_T9uQQm1w"}
    }
    expect(favoritesReducer(initialState, action)).toMatchObject({
      favoriteJokes: [animalJoke],
      isDarkBg: true,
      isFavoritesOpen: true
    })
  })

  it('should open favorites bar', () => {
    const initialState = {
      isFavoritesOpen: false,
      isDarkBg: false
    }
    const action = {
      type: types.OPEN_FAVORITES
    }
    expect(favoritesReducer(initialState, action)).toMatchObject({
      isFavoritesOpen: true,
      isDarkBg: true
    })
  })
  
  it('should close favorites bar', () => {
    const initialState = {
      isFavoritesOpen: true,
      isDarkBg: true
    }
    const action = {
      type: types.OPEN_FAVORITES
    }
    expect(favoritesReducer(initialState, action)).toMatchObject({
      isFavoritesOpen: false,
      isDarkBg: false
    })
  })
})

