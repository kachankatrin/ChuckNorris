import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {jokesReducer} from '../store/reducers/Reducers';
import {compose} from 'redux';

const reducers = combineReducers({
  jokeState: jokesReducer
})
const enhanceMiddleWare = window.navigator.userAgent.includes('Chrome') 
  ?  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
  : compose(applyMiddleware(thunk));
export const store = createStore(reducers, enhanceMiddleWare);