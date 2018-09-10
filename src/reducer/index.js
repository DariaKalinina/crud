import {combineReducers} from 'redux';
import personList from './personList';
import changePage from './changePage';
import person from './person';

export default combineReducers({
  currentPage: changePage,
  persons: personList,
  person: person
})