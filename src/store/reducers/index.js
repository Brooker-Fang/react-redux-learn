import { combineReducers } from 'redux'
import CounterReducer from '../reducers/counter.reducer'
import ModelReducer from '../reducers/model.reducer'
// 合并 reducer
// 最终传入 { counter: { count: 0 }, model: { show: false }}
export default combineReducers({
  counter: CounterReducer,
  model: ModelReducer
})