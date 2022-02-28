import React, { Component } from 'react'
import {connect} from 'react-redux'
// import { bindActionCreators } from 'redux'
import { bindActionCreators } from '../my-redux/bindActionCreators '
export class ReactReduxPage extends Component {
  render() {
    const {count, increment, decrement} = this.props
    return (
      <div>
        <h3>MyReduxPage</h3>
        <div>store.count === {count}</div>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>decrement</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  let creator = {
    increment: () => ({type: 'increment', payload: 5}),
    decrement: () => ({type: 'decrement', payload: 3})
  }
  creator = bindActionCreators(creator, dispatch) 
  return {
    dispatch,
    // increment: () => dispatch({type: 'increment', payload: 5}),
    // decrement: () => dispatch({type: 'decrement', payload: 3}),
    ...creator
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage)