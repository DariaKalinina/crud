import {
  DELETE, SAVE, CHANGE, CHANGE_PAGE
} from '../constants';

export function change(id) {
  return {
    type: CHANGE,
    payload: id
  }
}

export function deleteItem(id) {
  return {
    type: DELETE,
    payload: id
  }
}

export function saveItem(id, data) {
  return {
    type: SAVE,
    payload: {data},
    generateId: id
  }
}

export function changePage(string) {
  return {
    type: CHANGE_PAGE,
    payload: string
  }
}

