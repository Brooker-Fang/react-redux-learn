import { takeEvery, put, delay } from 'redux-saga/effects'
import { increment } from '../actions/counter.actions'

function* increment_async_fn(action) {
  yield delay(2000)
  yield put(increment(action.payload))
}

export default function* modalSaga() {
  yield takeEvery( 'increment_async', increment_async_fn)
}