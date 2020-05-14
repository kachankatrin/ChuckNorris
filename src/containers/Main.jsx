import React from 'react';
import { handleRadio, changeSearchType} from '../store/actions/Actions';
import { connect } from 'react-redux';
import Search from '../components/Search';
class Main extends React.Component {
  render() {
    return (
      <div>
        <Search 
          handleRadio={this.props.handleRadio} 
          checkedValue={this.props.jokeState.search} 
          changeSearchType={this.props.changeSearchType}
          stateSearchType={this.props.jokeState.searchType}
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
  changeSearchType
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
