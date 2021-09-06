import { combineReducers } from 'redux'
import { DestinationReducer } from './Destination/DestinationReducer'
import { CurrencySelectReducer } from './CurrencySelectReducer'

export const rootReducer = combineReducers({
  destination: DestinationReducer,
  currency: CurrencySelectReducer,
})
