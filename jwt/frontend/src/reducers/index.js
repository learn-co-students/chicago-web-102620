


import { combineReducers } from 'redux'
import currentUserReducer from './currentUser'
import postsReducer from './posts'

export default combineReducers({
  currentUser: currentUserReducer,
  posts: postsReducer
})
