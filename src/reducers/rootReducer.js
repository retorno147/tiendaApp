import { combineReducers } from 'redux'
import { tiendaReducer } from './tiendaReducer'

export const rootReducer = combineReducers({
    tiendas : tiendaReducer
})