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
  stateLocalExchange 
} from '../store/actions/Actions';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Results from '../components/Results';
import Pagination from '../components/Pagination';



class Main extends React.Component {
  state = {
    jokesPerPage: 10
  }
  render() {
    const indexOfLastJoke = this.props.jokeState.currentPage * this.state.jokesPerPage;
    const indexOfFirstJoke = indexOfLastJoke - this.state.jokesPerPage;
    const currentJokes = this.props.jokeState.joke.slice(indexOfFirstJoke, indexOfLastJoke);
    const currentDate = Date.now();
    return (
      <div>
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
        />
        {this.props.jokeState.joke.length
          ? <ul>
            {currentJokes.map(item => {
              const upatedTimestamp = Date.parse(item.updated_at);
              const updatedHours = Math.ceil((currentDate - upatedTimestamp) / 3600000);
              return (
                <Results
                  addJoke={this.props.addJoke}
                  removeJoke={this.props.removeJoke}
                  item={item}
                  updatedHours={updatedHours}
                  joke={item}
                  favoriteJokes={this.props.favoritesState.favoriteJokes}
                  stateLocalExchange={this.props.stateLocalExchange}
                  isFavoriteJoke={
                    this.props.favoritesState.favoriteJokes.find(joke => item.id === joke.id)
                  }
                />
              )
            })}
          </ul>
          : <h5>No</h5>
        }
        <Pagination 
          jokesPerPage={this.state.jokesPerPage} 
          totalJokes={this.props.jokeState.joke.length} 
          paginate={this.props.paginate} 
          currentPage={this.props.jokeState.currentPage} 
        />
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
  stateLocalExchange
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
