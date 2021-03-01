import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode',
  params: {
    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  },
  headers: { 'Content-type': 'application/json' }
})
