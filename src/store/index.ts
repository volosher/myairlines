import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { CurrencySelectReducer } from './reducers/CurrencySelectReducer'

export const store = createStore(CurrencySelectReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof CurrencySelectReducer>
