export const UPDATE_SIZE = 'sound-space/UPDATE_SIZE'
export const UPDATE_LISTENER_LOC = 'sound-space/UPDATE_LISTENER_LOC'
export const SET_MOUSE_OVER_STATE = 'sound-space/SET_MOUSE_OVER_STATE'

const initalState = {
  mouseOver:false,
  listenerLoc:[],
  width:0,
  height:0
}


export default (state=initalState, action)=>{
    switch (action.type) {
      case UPDATE_SIZE:
        return {
          ...state,
          ...action.payload
        }
      case UPDATE_LISTENER_LOC:
        return{
          ...state,
          listenerLoc: action.payload,
          mouseOver: true
        }
      case SET_MOUSE_OVER_STATE:
        return{
          ...state,
          mouseOver: action.payload
        }
      default:
        return state
    }
}

export const updateSize = (width,height)=>{
  return dispatch =>{
    dispatch({
      type: UPDATE_SIZE,
      payload:{width,height}
    })
  }
}

export const setListenerLoc = (x,y)=>{
  return dispatch =>{
    dispatch({
      type: UPDATE_LISTENER_LOC,
      payload: [x,y]
    })
  }
}
