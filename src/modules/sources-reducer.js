export const ADD_SOURCE = 'sources/ADD_SOURCE'
export const REMOVE_SOURCE = 'sources/REMOVE_SOURCE'
export const UPDATE_SOURCE = 'sources/UPDATE_SOURCE'
export const SELECT_SOURCE = 'sources/SELECT_SOURCE'
export const DESELECT_SOURCE = 'sources/DESELECT_SOURCE'

const initalState = {
  1: {
    soundID: 1,
    location: [10,20],
    radius: 20,
    color:'red',
    triggerType: 'OnEnter',
    selected: false
  },
  2:{
    soundID: 2,
    location: [20,30],
    radius: 30,
    color: 'green',
    triggerType: 'OnLeave',
    selected: false
  },
  3:{
    soundID: 3,
    location: [90,90],
    radius: 30,
    blue: 'blue',
    triggerType:'proximity',
    proximityType: 'linear',
    selected: false
  }
}

export default (state=initalState, action)=>{
  switch (action.type) {
    case ADD_SOURCE:
      return{
        ...state,
        ...{ [action.id] : action.payload }
      }
    case SELECT_SOURCE:
      let sourceToSelect = { ...state[action.id], selected:true }
      return {
        ...state,
        ...{ [action.id] : sourceToSelect }
      }
    case DESELECT_SOURCE:
      let sourceToDeselect = { ...state[action.id], selected:false}
      return {
        ...state,
        ...{ [action.id] : sourceToDeselect }
      }
    case REMOVE_SOURCE:
      return{
        ...state,
        ...{ [action.id] : action.payload }
      }
    case UPDATE_SOURCE:
      let newSource = { ...state[action.id], ...action.payload }
      console.log('new source is ', newSource)
      return {
        ...state,
        ...{ [action.id] : newSource }
      }
    default:
      return state
  }
}

export const selectSource = (id)=>{
  return ( dispatch ) => {
    dispatch({
      type: SELECT_SOURCE,
      id: id
    })
  }
}

export const deselectSource = (id)=>{
  return ( dispatch ) => {
    dispatch({
      type: DESELECT_SOURCE,
      id: id
    })
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
