import { createAction } from 'redux-actions'

/**
 * Create request action helper
 * @param baseName
 * @returns {*}
 */
export const createRequestAction = (baseName) =>
  ['request', 'success', 'failure', 'reset'].reduce(
    (acc, action) => {
      const title = `${baseName}/${action}`

      acc[action] = createAction(
        title.toLocaleUpperCase(),
        (payload) => payload
      )
      return acc
    },
    { baseName }
  )

/**
 * Calculate distance from latitude longitude in kilometers
 * @param lat1
 * @param lon1
 * @param lat2
 * @param lon2
 * @returns {number}
 */
export const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const deg2rad = (deg) => deg * (Math.PI / 180)

  const R = 6371 // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1) // deg2rad below
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.floor(R * c) // Distance in km
}
