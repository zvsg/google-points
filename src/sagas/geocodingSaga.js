import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { API } from 'services/api'
import { GET_GEOCODING_LIST } from 'actions'

function* getGeocodingList({ payload: { pointA, pointB } }) {
  try {
    const [pointALocation, pointBLocation] = yield all([
      call(API.get, `/json?&address=${pointA}`),
      call(API.get, `/json?&address=${pointB}`)
    ])

    yield put(
      GET_GEOCODING_LIST.success({
        locationA: {
          formattedAddress: pointALocation.data.results[0].formatted_address,
          geometryLocation: pointALocation.data.results[0].geometry.location
        },
        locationB: {
          formattedAddress: pointBLocation.data.results[0].formatted_address,
          geometryLocation: pointBLocation.data.results[0].geometry.location
        }
      })
    )
  } catch (e) {
    console.error(e)
    yield put(GET_GEOCODING_LIST.failure())
  }
}

export default function* () {
  yield all([takeLatest(GET_GEOCODING_LIST.request, getGeocodingList)])
}
