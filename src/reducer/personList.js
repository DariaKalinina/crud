import data from '../data';
import { SAVE, DELETE } from './../constants';

localStorage.data = JSON.stringify(data);

export default function personList(state = JSON.parse(localStorage.data), action) {
  const { type, payload } = action;

  switch (type) {
    case SAVE:
      console.log('payload.id ------  payload.id');
      return ({
        ...state,
      '1234556677': {...payload}
      });
    case DELETE:
      const newState = {...state};
      delete newState[payload];
      console.log('payload.id и  newState----------',  payload, newState);
      return newState;
  }

  return state
}
