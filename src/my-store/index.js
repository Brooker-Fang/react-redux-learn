// import {createStore, applyMiddleware, combineReducers} from "redux"
import {createStore, applyMiddleware, combineReducers} from '../my-redux'
// import thunk from 'redux-thunk'
import thunk from '../my-redux/thunk'
// import logger from 'redux-logger'
import logger from '../my-redux/logger'
function countReducer(state = 0, action ) {
  switch(action.type) {
    case 'ADD':
        return state + 1
    case 'MINUS':
      return state - action.payload || 1
    default: return state
  }
}
function countReducer2(state = 0, action ) {
  switch(action.type) {
    case 'ADD':
        return state + 1
    case 'MINUS':
      return state - action.payload || 1
    default: return state
  }
}
const store = createStore(combineReducers({count: countReducer, count2: countReducer2}), applyMiddleware(logger, thunk));
export default store