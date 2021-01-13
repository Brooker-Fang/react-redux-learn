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