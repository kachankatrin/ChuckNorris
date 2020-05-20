import React from 'react';
import { connect } from 'react-redux';
import Results from '../components/Results';
import { addJoke, removeJoke } from '../store/actions/Actions';

function Favorites(props) {
  const favoriteOpen = props.isFavoritesOpen ? 'open' : 'close';
  return (
    props.favoriteJokes.length ?
      <div className={'favorites-container ' + favoriteOpen}>
        <div className='favorites'>
          <h1>Favorite</h1>
          <ul className='jokes-list'>
            {props.favoriteJokes.map((item) => {
              const upatedTimestamp = Date.parse(item.updated_at);
              const updatedHours = Math.ceil((props.jokeState.currentDate - upatedTimestamp) / 3600000);
              return <Results
                addJoke={props.addJoke}
                removeJoke={props.removeJoke}
                item={item}
                updatedHours={updatedHours}
                joke={item}
                favoriteJokes={props.favoriteJokes}
                isFavoriteJoke={
                  props.favoriteJokes.find(joke => item.id === joke.id)
                }
                classLi='single-joke favorite-joke'
              />
            })}
          </ul>
        </div>
      </div>
      : null
  )
}
const mapStateToProps = (state) => {
  return {
    jokeState: state.jokeState,
    favoriteJokes: state.favoritesState.favoriteJokes,
    isFavoritesOpen: state.favoritesState.isFavoritesOpen
  }
}
const mapDispatchToProps = {
  addJoke,
  removeJoke
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);