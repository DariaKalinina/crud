import data from '../data';
import { SAVE, DELETE } from './../constants';

localStorage.data = JSON.stringify(data);

export default function personList(state = JSON.parse(localStorage.data), action) {
  const { type, payload } = action;

  switch (type) {
    case SAVE:
      console.log('payload.id ----------',  payload.id);
      return ([
        ...state,
        {'id': (payload.id === null)
          ? state.length+1
          : payload.id,
        ...payload}
        ]);
    case DELETE:
      const newState = [...state];
      newState.splice(payload, 1);
      console.log('payload.id и  newState----------',  payload, newState);
      return newState;
  }

  return state
}
