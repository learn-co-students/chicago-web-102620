

import { combineReducers } from 'redux'
import todosReducer from './todos'
import loadingReducer from './loading'


export default combineReducers({
  todos: todosReducer,
  loading: loadingReducer
})
