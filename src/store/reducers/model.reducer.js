import { CHANGEMODEL } from "../const/model.const"

const initState = {
  show: false
}
function ModelReducer (state = initState, actions) {
  switch(actions.type) {
    case CHANGEMODEL: 
      return {
        ...state,
        show: actions.payload
      }
    default: 
      return state
  }
}
export default ModelReducer