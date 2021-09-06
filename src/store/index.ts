import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { DestinationReducer } from './reducers/Destination/DestinationReducer'
import { CurrencySelectReducer } from './reducers/CurrencySelectReducer'
import { rootReducer } from './reducers'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof CurrencySelectReducer>
