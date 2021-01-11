const loggerMid = store => next => action => {
  console.log(store)
  console.log(action)
  next(action)
}
export default loggerMid