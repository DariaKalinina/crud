import {combineReducers} from 'redux';
import personList from './personList';
import changePage from './changePage';

export default combineReducers({
  isOpen: changePage,
  persons: personList
})