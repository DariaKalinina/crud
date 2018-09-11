import myStorage from '../service';
import { SAVE_CHANGE, SAVE_NEW_ITEM, DELETE } from './../constants';

export default function personList(state = myStorage.storage, action) {
  const { type, payload, generateId, id } = action;

  switch (type) {
    case SAVE_CHANGE:
      const rewritePersonIndex = state.findIndex((person) => {
        return person.id === id;
      });
      myStorage.changeUser(payload.data, id, rewritePersonIndex);

      return myStorage.storage;


    case SAVE_NEW_ITEM:
      myStorage.addUser(payload, generateId);

      return myStorage.storage;


    case DELETE:
      const deleteIndex = state.findIndex((person) => {
        return person.id === payload;
      });
      myStorage.deleteUser(deleteIndex);

      return myStorage.storage;
  }

  return state
}
