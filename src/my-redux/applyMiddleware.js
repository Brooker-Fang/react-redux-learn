function compose(...funcs) {
  if(funcs.length === 0) {
    return (arg) => arg
  }
  if(funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
 function applyMiddleware(...middlewares) {
  return createStore => (reducer) => {
    const store = createStore(reducer)
    let dispatch = store.dispatch
    // 加强dispatch
    // 原先的dispatch只能处理 plain objects，要支持处理函数、promise
    const middlewaresParams = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    }
    const middlewaresChain = middlewares.map(middleware => {
      return middleware(middlewaresParams)
    })

    // 遍历执行中间件函数
    dispatch = compose(...middlewaresChain)(store.dispatch)
    return {
      ...store,
      dispatch
    }
  }
}

export default applyMiddleware