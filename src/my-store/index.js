import createStore from '../my-redux/createStore'
function countReducer(state = 0, action ) {
  switch(action.type) {
    case 'ADD':
        return state + 1
    case 'MINUS':
      return state - action.payload || 1
    default: return state
  }
}
const store = createStore(countReducer)
export default store