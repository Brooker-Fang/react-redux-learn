
export default function createStore(reducer, enhancer) {
  // 加强dispatch
  if (enhancer) {
    return enhancer(createStore)(reducer)
  }
  let currentState
  let currentListener = []
  function getState() {
    return currentState
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)

    // 执行订阅函数
    currentListener.forEach((listener) => {
      listener()
    })
  }
  function subscribe(listener) {
    currentListener.push(listener)
    // 返回取消订阅函数
    return () => {
      const index = currentListener.findIndex(listener)
      currentListener.splice(index, 1)
    }
  }

  // 初始化state
  dispatch({type: '@my-redux/initialState'})
  return {
    getState,
    dispatch,
    subscribe
  }
}
