export const ADD_SOURCE = 'sources/ADD_SOURCE'
export const REMOVE_SOURCE = 'sources/REMOVE_SOURCE'
export const UPDATE_SOURCE = 'sources/UPDATE_SOURCE'

const initalState = {
  1: {
    url: '/sounds/',
    location: [10,20],
    radius: 20,
    color:'red'
  },
  2:{
    url: '/sounds/',
    location: [20,30],
    radius: 30,
    color: 'green'
  },
  3:{
    url: '/sounds/',
    location: [20,30],
    radius: 30,
    blue: 'blue'
  }
}

export default (state=initalState, action)=>{
  switch (action.type) {
    case ADD_SOURCE:
      return{
        ...state,
        ...{ [action.id] : action.payload }
      }
    case REMOVE_SOURCE:
      return{
        ...state,
        ...{ [action.id] : action.payload }
      }
    case UPDATE_SOURCE:
      let newSource = { ...state[action.id], ...state.payload }
      return {
        ...state,
        ...{ [action.id] : newSource }
      }
    default:
      return state
  }
}

export const removeSource = (id)=>{
  return ( dispatch ) => {
    dispatch({
      type: REMOVE_SOURCE,
      id: id
    })
  }
}

export const updateSource = (id,source)=>{
  return ( dispatch ) => {
    dispatch({
      type: UPDATE_SOURCE,
      id: id,
      payload: source
    })
  }
}

export const addSource = (source) => {
  return ( dispatch, getState )=>{
    const state = getState()
    const nextID = Math.max(...Object.keys(state.sounds)) + 1

    dispatch({
      type: ADD_SOURCE,
      id: nextID,
      payload: source
    })
  }
}
