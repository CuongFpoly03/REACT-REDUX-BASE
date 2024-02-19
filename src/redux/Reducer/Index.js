import todoReducer from './Reduxcers'
import { combineReducers } from 'redux'
export default combineReducers({todos: todoReducer})