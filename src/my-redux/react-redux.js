/* 
  bindActionCreators 作用：
  将对象 actions = {
    increment: (payload) => ({ type: INCREMENT, payload }),
    decrement：(payload) => ({ type: INCREMENT, payload })
  } 转变为
   actions = {
    increment: (payload) => dispatch({ type: INCREMENT, payload }),
    decrement：(payload) => dispatch({ type: INCREMENT, payload })
  }
*/
export function bindActionCreators(creators, dispatch) {
  const obj = {}
  Object.keys(creators).forEach(key => {
    obj[key] = (...args) => dispatch(creators[key](...args))
  })
  return obj
}