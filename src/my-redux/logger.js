function logger({getState, dispatch}) {
  return (next) => {
    return (action) => {
      const preState = getState()
      console.log('action type === ', action.type)
      console.log('prev state === ', preState)
      const returnValue = next(action)
      const nextState = getState()
      console.log('next state === ', nextState)
      console.log('redux-logger-end')
      return returnValue
    }
  }
}
export default logger