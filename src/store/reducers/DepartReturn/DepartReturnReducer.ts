import { DepartReturnAction, DepartReturnActionsTypes, IDepartReturnState } from './DepartReturnReducerTypes'

const initialState:IDepartReturnState = {
  depart: '',
  return: '',
}

export const DepartReturnReducer = (state = initialState, action:DepartReturnAction):IDepartReturnState => {
  switch (action.type) {
    case DepartReturnActionsTypes.SET_DEPART:
      return { ...state, depart: action.payload }
    case DepartReturnActionsTypes.SET_RETURN:
      return { ...state, return: action.payload }
    default:
      return state
  }
}
