import React from 'react';
import '../App.css';
import {getData} from '../store/actions/Actions';
import { connect } from 'react-redux';

class Test extends React.Component {
  componentDidMount() {
    const random = 'random'
    this.props.getData(random)
  }
  render() {
    return (
      <div>
        <h1>jokes</h1>
        <p>joke: {this.props.jokeState.joke}</p>
      </div>
    );
  }
}
const mapDispatchToProps = {
  getData
}
const mapStateToProps = (state) => {
  return {
    jokeState: state.jokeState
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test);