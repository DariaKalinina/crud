import { CHANGE, SAVE } from './../constants';

export default function personList(state = null, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE:
      const newState = payload;
      return newState;
    case SAVE:
      return null;
  }

  return state
}