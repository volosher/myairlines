import { ITicketsState, TicketsActionsTypes, TicketsAction } from './TicketsReducerTypes'

const initialState:ITicketsState = {
  ticket: '',
}

export const TicketsReducer = (state = initialState, action:TicketsAction):ITicketsState => {
  switch (action.type) {
    case TicketsActionsTypes.FIND_TICKETS:
      return { ...state, ticket: action.payload }
    default:
      return state
  }
}
