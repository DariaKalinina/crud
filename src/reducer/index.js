import {combineReducers} from 'redux';
import personList from './personList'

export default combineReducers({
  persons: personList
})