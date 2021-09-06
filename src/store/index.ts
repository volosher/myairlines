import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { CurrencySelectReducer } from './reducers/CurrencySelectReducer'
import { rootReducer } from './reducers'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof CurrencySelectReducer>
