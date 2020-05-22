import React from 'react';
import {
  handleRadio,
  changeSearchType,
  selectCategory,
  handleInput,
  getJoke,
  paginate,
  addJoke,
  removeJoke,
  getIndexOfLastJoke
} from '../store/actions/Actions';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Results from '../components/Results';
import Pagination from '../components/Pagination';


class Main extends React.Component {
  render() {
    const indexOfFirstJoke = this.props.jokeState.indexOfLastJoke - this.props.jokeState.jokesPerPage;
    const currentJokes = this.props.jokeState.jokes.slice(indexOfFirstJoke, this.props.jokeState.indexOfLastJoke);
    const darkClass = this.props.favoritesState.isDarkBg ? 'dark' : ''
    const favoriteOpen = this.props.favoritesState.isFavoritesOpen ? 'tablet' : '';
    return (
      <div className={favoriteOpen + ' main-container '}>
      <div className={darkClass}></div>
        <div className='main'>
          <h3>MSI 2020</h3>
          <Search
            handleRadio={this.props.handleRadio}
            checkedValue={this.props.jokeState.search}
            changeSearchType={this.props.changeSearchType}
            stateSearchType={this.props.jokeState.searchType}
            checkedCategory={this.props.jokeState.category}
            selectCategory={this.props.selectCategory}
            value={this.props.jokeState.textsearch}
            onChange={(e) => this.props.handleInput(e, 'textsearch')}
            getJoke={() => { this.props.getJoke(this.props.jokeState.searchapi) }}
            getIndexOfLastJoke={this.props.getIndexOfLastJoke}
          />
          {this.props.jokeState.jokes.length
            ? <ul className='jokes-list'>
              {currentJokes.map(item => {
                const upatedTimestamp = Date.parse(item.updated_at);
                const updatedHours = Math.ceil((this.props.jokeState.currentDate - upatedTimestamp) / 3600000);
                return (
                  <Results
                    addJoke={this.props.addJoke}
                    removeJoke={this.props.removeJoke}
                    closeDarkBg={this.props.closeDarkBg}
                    item={item}
                    updatedHours={updatedHours}
                    joke={item}
                    favoriteJokes={this.props.favoritesState.favoriteJokes}
                    isFavoriteJoke={
                      this.props.favoritesState.favoriteJokes.find(joke => item.id === joke.id)
                    }
                    classLi='single-joke '
                  />
                )
              })}
            </ul>
            : null
          }
          <Pagination
            jokesPerPage={this.props.jokeState.jokesPerPage}
            totalJokes={this.props.jokeState.jokes.length}
            paginate={this.props.paginate}
            currentPage={this.props.jokeState.currentPage}
            getIndexOfLastJoke={this.props.getIndexOfLastJoke}
          />
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    jokeState: state.jokeState,
    favoritesState: state.favoritesState
  }
}

const mapDispatchToProps = {
  handleRadio,
  changeSearchType,
  selectCategory,
  handleInput,
  getJoke,
  paginate,
  addJoke,
  removeJoke,
  getIndexOfLastJoke
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
