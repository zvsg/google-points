import React, { useEffect } from 'react'
import GoogleMapsAdapter from 'adapters/google-maps-adapter'
import GooglePoints from 'domain/GooglePoints'
import { useDispatch } from 'react-redux'
import { GET_GEOCODING_LIST } from 'actions'

function App() {
  const dispatch = useDispatch()

  const markersCallback = ({ markerA, markerB }) => {
    dispatch(
      GET_GEOCODING_LIST.success({
        locationA: { geometryLocation: markerA, formattedAddress: '' },
        locationB: { geometryLocation: markerB, formattedAddress: '' }
      })
    )
  }

  // TODO: add handling zero results

  useEffect(() => {
    // global instance need for cypress and and google point component
    window.googleMapsInstance = new GoogleMapsAdapter(markersCallback)

    return () => {
      window.googleMapsInstance = null
    }
  })

  return (
    <div className="app">
      <div id="google-map" />
      <GooglePoints />
    </div>
  )
}

export default App
