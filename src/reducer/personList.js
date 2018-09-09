import data from '../data';
import { SAVE, DELETE } from './../constants';

localStorage.data = JSON.stringify(data);

export default function personList(state = JSON.parse(localStorage.data), action) {
  const { type, payload, generateId } = action;

  switch (type) {
    case SAVE:
      return ({
        ...state,
        [generateId]: {...payload.data}
      });
    case DELETE:
      const newState = {...state};
      delete newState[payload];
      return newState;
  }

  return state
}
