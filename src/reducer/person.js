import { CHANGE, SAVE, BACK } from './../constants';

export default function personList(state = null, action) {
  const { type, payload } = action;

  switch (type) {
    case CHANGE:
      const newState = payload;
      return newState;
    case SAVE:
      return null;
    case BACK:
      return null;
  }

  return state
}