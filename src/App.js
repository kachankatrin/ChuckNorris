import React, { useState, useEffect, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
import './App.scss';
import Main from './containers/Main';
import Favorites from './containers/Favorites';
import { OPEN_FAVORITES } from './store/actions/Actions';
import { ReactComponent as Sandwitch } from './svg/sandwitch.svg';
import { ReactComponent as Close } from './svg/close.svg';
// import { scroll } from './utils';
function App() {
  // const ref = React.createRef()
  const { store } = useContext(ReactReduxContext);
  const { getState, dispatch, subscribe } = store;
  const [ storeState, setStoreState ] = useState(getState());
  useEffect(() => subscribe(
    () => setStoreState(getState())
  , []))
  console.log(storeState, dispatch)
  const favoriteJokes = storeState.favoritesState.favoriteJokes;
  const isFavoritesOpen = storeState.favoritesState.isFavoritesOpen;
  
  return (
    <div className='flex-container'>
    {favoriteJokes.length
      ? <div className='sandwitch-menu' onClick={() => dispatch({ type: OPEN_FAVORITES })}>
      {isFavoritesOpen
        ? <Close className='sandwitch' /> 
        : <Sandwitch className='sandwitch' />
      }
        <h1>Favorite</h1>
      </div>
      : null
    }
      <Main />
      <Favorites />
    </div>
  )
}
export default App;
