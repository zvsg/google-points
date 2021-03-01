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

    default:
      return state
  }
}
