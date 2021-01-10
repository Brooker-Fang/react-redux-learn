import { createStore } from 'redux'
import reducer from './reducers'
// 创建 仓库
export const store = createStore(reducer)