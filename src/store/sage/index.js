import { all } from 'redux-saga/effects'
import countSage from './counter.saga'
import modalSaga from './module.sage'
const rootSage = function* () {
  // 合并sage
  yield all([
    countSage(),
    modalSaga()
  ])
}
export default rootSage