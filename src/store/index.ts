import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { CurrencySelectReducer } from './reducers/CurrencySelectReducer'
import { rootReducer } from './reducers'
import { DestinationReducer } from './reducers/Destination/DestinationReducer'
import { DepartReturnReducer } from './reducers/DepartReturn/DepartReturnReducer'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = {
    destination: ReturnType<typeof DestinationReducer>,
    currency: ReturnType<typeof CurrencySelectReducer>
    departReturn: ReturnType<typeof DepartReturnReducer>,
}
