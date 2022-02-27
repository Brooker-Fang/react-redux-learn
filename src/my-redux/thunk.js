function thunk({getState, dispatch}) {
  // next ==> dispatch
  return (next) => {
    return (action) => {
      if(typeof action === 'function') {
        return action(dispatch, getState)
      }
      if(action instanceof Promise) {
        return action.then((res) => dispatch(res))
      }
      return next(action)
    }
  }
}
export default thunk