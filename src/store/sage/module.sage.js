import { takeEvery, put, delay } from 'redux-saga/effects'
import { changeModel } from '../actions/model.actions'

function* showModal_async_fn() {
  yield delay(2000)
  yield put(changeModel())
}

export default function* modalSaga() {
  yield takeEvery( 'show_modal_async', showModal_async_fn)
}