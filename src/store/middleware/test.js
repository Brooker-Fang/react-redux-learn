const testMidWare = (store) => next => action => {
  console.log('testMidWare')
  next(action)
}
export default testMidWare