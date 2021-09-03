const GET_CURRENCY = 'GET_CURRENCY'

interface ISelectedCurrency {
    selected: string
}
interface ISelectedCurrencyAction {
    type: string,
    payload: string
}
const defaultState:ISelectedCurrency = {
  selected: '',
}

export const CurrencySelectReducer = (state = defaultState, action:ISelectedCurrencyAction):ISelectedCurrency => {
  switch (action.type) {
    case GET_CURRENCY:
      return { ...state, selected: action.payload }

    default:
      return state
  }
}
