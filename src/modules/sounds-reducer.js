export const ADD_SOUND = 'sounds/ADD_SOUND'
export const REMOVE_SOUND = 'sounds/REMOVE_SOUND'
export const UPDATE_SOUND = 'sounds/UPDATE_SOUND'


const initalState = {
  1:{
    url : 'sounds/plasticFly_walk.wav',
    name: 'Plastic Fly',
    description: 'some sound no 1'
  },
  2:{
    url: 'sounds/MONTY_onlytime.wav',
    name: 'Only Time',
    description: 'sound sound no 2'
  },
  3:{
    url: 'sounds/MONTY_thatspain.wav',
    name: 'The Spain',
    description: 'sound sound no3 '
  }
}

export default (state=initalState, action)=>{
  switch (action.type) {
    case ADD_SOUND:
      return{
        ...state,
        ...{ [action.id]: action.payload }
      }
    case REMOVE_SOUND:
      return{
        ...state,
        ...{ [action.id] : action.payload }
      }
    case UPDATE_SOUND:
      let newSound = { ...state[action.id], ...state.payload }
      return {
        ...state,
        ...{ [action.id] : newSound }
      }
    default:
      return state
  }
}

export const removeSound = (id)=>{
  return ( dispatch ) => {
    dispatch({
      type: REMOVE_SOUND,
      id: id
    })
  }
}

export const updateSound = (id,sound)=>{
  return ( dispatch ) => {
    dispatch({
      type: UPDATE_SOUND,
      id: id,
      payload: sound
    })
  }
}

export const addSound = (sound)=>{
  return ( dispatch, getState )=>{
    const state = getState()
    const nextID = Math.max(...Object.keys(state.sounds)) + 1
    dispatch({
      type: ADD_SOUND,
      id: nextID,
      payload: sound
    })
  }
}
