import { combineReducers } from 'redux'
import loadingReducer from 'reducers/loadingReducer'
import addressReducer from 'reducers/geocodingReducer'

export default () =>
  combineReducers({
    loading: loadingReducer,
    geocodingList: addressReducer
  })
