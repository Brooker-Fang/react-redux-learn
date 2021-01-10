import { DECREMENT, INCREMENT } from "../const/counter.const";

const initialState = {
  count: 0
}
// 指定什么操作 做什么事
function CounterReducer (state = initialState, action) {
  switch(action.type) {
    case INCREMENT: 
      return {
        count: state.count + action.payload
      }
    case DECREMENT:
      return {
        count: state.count - action.payload
      }
    default:
      return state;
  }
}
export default CounterReducer

