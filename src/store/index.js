import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import loggerMid from './middleware/logger'
import testMidWare from './middleware/test'
import rootSage from './sage'
// 自定义 thunk实现
// import thunk from './middleware/thunk'
// import thunk from 'redux-thunk'

// applyMiddleware(loggerMid, testMidWare) 按顺序 查询
// 创建 仓库
// export const store = createStore(reducer, applyMiddleware(loggerMid, testMidWare, thunk))
import createSageMiddleware from 'redux-saga'
// 创建sage中间件
const sageMiddleWare = createSageMiddleware()
export const store = createStore(reducer, applyMiddleware(loggerMid, testMidWare, sageMiddleWare))
// 启动sage
sageMiddleWare.run(rootSage)