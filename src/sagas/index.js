import { all } from 'redux-saga/effects'
import geocodingSaga from 'sagas/geocodingSaga'

export default function* rootSaga() {
  yield all([geocodingSaga()])
}
