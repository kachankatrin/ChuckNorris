import React from 'react';
import '../App.css';
import {getJoke, handleRadio} from '../store/actions/Actions';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import {categories} from '../utils';
class Test extends React.Component {
  componentDidMount() {
    const random = 'random'
    this.props.getJoke(random)
  }
  render() {
    return (
      <div>
        <h1>jokes</h1>
        <p>joke: {this.props.jokeState.joke}</p>
        <Categories 
          values={[
            {value: categories[0], label: categories[0], checked: this.props.jokeState.category === categories[0]},
            {value: categories[1], label: categories[1], checked: this.props.jokeState.category === categories[1]},
            {value: categories[2], label: categories[2], checked: this.props.jokeState.category === categories[2]},
            {value: categories[3], label: categories[3], checked: this.props.jokeState.category === categories[3]}
          ]}
          handleChange={(e) => {this.props.handleRadio(e, 'category')}}
        />
      </div>
    );
  }
}
const mapDispatchToProps = {
  getJoke,
  handleRadio
}
const mapStateToProps = (state) => {
  return {
    jokeState: state.jokeState
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test);