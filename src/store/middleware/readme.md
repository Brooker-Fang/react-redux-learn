开发中间件
1 中间件模板代码：
  export default store => next => action => {
    ...do something
    next(action)
  }
2 注册并引入中间件
  import { createStore, applyMiddleware } from 'redux'

  // applyMiddleware(loggerMid, testMidWare) 按顺序 查询
  export const store = createStore(reducer, applyMiddleware(loggerMid, testMidWare))
redux-thunk 和 redux-saga
 1 都允许在使用redux过程中执行异步操作
 2 redux-sage相比于thunk，可以将异步操作从action creator文件中抽离出来，放在单独的一个文件中

redux-saga使用：
1 使用sage接收action 执行异步操作
import { takeEvery, put } from 'redux-sage/effe'