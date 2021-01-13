
// 用于处理 执行异步操作的action 的中间件
const thunk = store => next => action => {
  // 如果action传递的是 函数，说明是异步操作, 执行action，并传入dispatch
  if (typeof action === 'function') {
    return action(store.dispatch)
  }
  next(action)
}
export default thunk