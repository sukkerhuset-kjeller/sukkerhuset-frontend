import { combineReducers } from 'redux'
import pagesReducer from './pages'
import settingsReducer from './settings'

export default combineReducers({
    pagesReducer,
    settingsReducer
})