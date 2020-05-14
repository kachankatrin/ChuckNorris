import React from 'react';
import { handleRadio, changeSearchType, selectCategory, handleInput, getJoke } from '../store/actions/Actions';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Results from '../components/Results'
class Main extends React.Component {
  render() {
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
          getJoke={() =>{ this.props.getJoke(this.props.jokeState.searchapi)}}
        />
        <Results 
        results={this.props.jokeState.joke}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    jokeState: state.jokeState
  }
}

const mapDispatchToProps = {
  handleRadio,
  changeSearchType,
  selectCategory,
  handleInput,
  getJoke
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
