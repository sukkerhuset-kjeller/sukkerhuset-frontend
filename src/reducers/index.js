import { combineReducers } from 'redux'
import pageReducer from './pages'
import settingsReducer from './settings'
import quizReducer from './quiz'
import facebookReducer from './facebook'

export default combineReducers({
    pageReducer,
    settingsReducer,
    quizReducer,
    facebookReducer
})