import { combineReducers } from 'redux'
import  sourcesReducer  from './sources-reducer'
import  soundsReducer  from './sounds-reducer'

export default combineReducers({
  sounds: soundsReducer,
  sources: sourcesReducer
})
