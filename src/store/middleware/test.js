const testMidWare = (store) => next => action => {
  console.log('testMidWare')
}
export default testMidWare