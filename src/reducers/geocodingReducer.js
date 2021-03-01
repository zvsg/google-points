import { GET_GEOCODING_LIST } from 'actions'

const initialState = {
  locationA: {
    formattedAddress: '',
    geometryLocation: { lat: '', lng: '' }
  },
  locationB: {
    formattedAddress: '',
    geometryLocation: { lat: '', lng: '' }
  }
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_GEOCODING_LIST.success().type:
      return payload

    case GET_GEOCODING_LIST.failure().type:
      return { ...initialState, ...{ error: true } }

    default:
      return state
  }
}
