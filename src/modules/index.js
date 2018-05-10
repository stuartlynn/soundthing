import { combineReducers } from 'redux'
import  sourcesReducer  from './sources-reducer'
import  soundsReducer  from './sounds-reducer'
import  soundSpaceReducer  from './sound-space-reducer'

export default combineReducers({
  sounds: soundsReducer,
  sources: sourcesReducer,
  soundSpace : soundSpaceReducer
})
