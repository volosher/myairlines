import { IDestinationState, DestinationActionsTypes, DestinationAction } from './DestinationTypes'

const initialState:IDestinationState = {
  from: '',
  to: '',
}

export const DestinationReducer = (state = initialState, action:DestinationAction):IDestinationState => {
  switch (action.type) {
    case DestinationActionsTypes.GET_FROM:
      return { ...state, from: action.payload }
    case DestinationActionsTypes.GET_TO:
      return { ...state, to: action.payload }
    default:
      return state
  }
}
