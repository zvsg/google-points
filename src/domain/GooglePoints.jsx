import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_GEOCODING_LIST } from 'actions/geocodingAction'
import { geocodingCoordinates, createLoadingSelector } from 'selectors'
import { getDistanceFromLatLonInKm } from 'helpers/common'
import SubmitButton from 'components/SubmitButton'
import TextInput from 'components/TextInput'

export default function GooglePoints() {
  const dispatch = useDispatch()

  const [pointA, setPointA] = useState('')
  const [pointB, setPointB] = useState('')
  const [distance, setDistance] = useState(0)

  // loader for disable button while data is loading
  const submitLoadingSelector = createLoadingSelector([
    GET_GEOCODING_LIST.baseName
  ])
  const submitLoading = useSelector(submitLoadingSelector)

  const { locationA, locationB, error } = useSelector(geocodingCoordinates)

  useEffect(() => {
    setDistance(
      getDistanceFromLatLonInKm(
        locationA.geometryLocation.lat,
        locationA.geometryLocation.lng,
        locationB.geometryLocation.lat,
        locationB.geometryLocation.lng
      )
    )
    setPointA(locationA.formattedAddress)
    setPointB(locationB.formattedAddress)
  }, [locationA, locationB])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      GET_GEOCODING_LIST.request({
        pointA,
        pointB
      })
    )
    window.googleMapsInstance.deleteMarkers()
  }

  return (
    <div className="google-points">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">
          Calculate Geometric distance here!
        </h1>
        <h2 className="text-xl">
          Current distance is:{' '}
          <span id="geometric-distance">{distance} km</span>
        </h2>
        <br />

        <span>or you can type manually:</span>

        <form onSubmit={handleSubmit}>
          <TextInput
            id="pointA"
            className="w-full mt-5"
            onChange={(e) => setPointA(e.target.value)}
            placeholder="Point A"
            value={pointA}
          />
          <TextInput
            id="pointB"
            className="w-full mt-5"
            onChange={(e) => setPointB(e.target.value)}
            placeholder="Point B"
            value={pointB}
          />

          <SubmitButton id="submit-button" loading={submitLoading} />
          {error && (
            <span
              className="bg-red-200 relative text-red-500 py-3 px-3 rounded-lg ml-5"
              id="error-text"
            >
              Couldn't find the location(s) 🙁
            </span>
          )}
        </form>
      </div>
    </div>
  )
}
