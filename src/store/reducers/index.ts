import { combineReducers } from 'redux'
import { DestinationReducer } from './Destination/DestinationReducer'
import { CurrencySelectReducer } from './CurrencySelectReducer'
import { DepartReturnReducer } from './DepartReturn/DepartReturnReducer'

export const rootReducer = combineReducers({
  destination: DestinationReducer,
  currency: CurrencySelectReducer,
  departReturn: DepartReturnReducer,
})
