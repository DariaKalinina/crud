import myStorage from '../service';
import { SAVE, DELETE } from './../constants';

export default function personList(state = myStorage.storage, action) {
  const { type, payload, generateId } = action;
  switch (type) {
    case SAVE:

      const rewrite = state.findIndex((person) => {
        return person.id === generateId;
      });

      if (rewrite === -1) {
        myStorage.addUser(payload.data, generateId);
        console.log('сейчас state такой==========1', state);
        return ([
          ...state,
          {...payload.data, id: generateId}
        ]);
      } else {
        myStorage.changeUser(payload.data, generateId, rewrite);
        console.log('сейчас state такой===========2', state);
        const newState = [...state];
        newState.splice(rewrite, 1, {...payload.data, id: generateId});
        return newState;
      }

    case DELETE:

      const newState = [...state];
      const deleteIndex = newState.findIndex((person) => {
        return person.id === payload;
      });
      newState.splice(deleteIndex, 1);
      myStorage.deleteUser(deleteIndex);
      console.log('сейчас state такой========3', state);
      return newState;
  }

  return state
}
