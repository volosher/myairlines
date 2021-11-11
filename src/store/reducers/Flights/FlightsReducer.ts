import { DepartReturnAction, FlightsActionsTypes, IFlightState } from './FlightsReducerTypes'

const defaultState:IFlightState = {

  flights: {

    Quotes: [],
    Carriers: [],
    Places: [],
    Currencies: [],
    Routes: [],

  },
}

export const FlightsReducer = (state = defaultState, action:DepartReturnAction):IFlightState => {
  switch (action.type) {
    case FlightsActionsTypes.GET_FLIGHTS:
      return { ...state, flights: action.payload }

    default:
      return state
  }
}
