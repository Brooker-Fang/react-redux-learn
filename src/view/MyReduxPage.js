
import React, { Component } from 'react'
import store from '../my-store'

export class MyReduxPage extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }
  add = () => {
    store.dispatch({type: 'ADD'})
  }

  render() {
    return (
      <div>
        <h3>MyReduxPage</h3>
        <div>store === {store.getState()}</div>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }
}

export default MyReduxPage