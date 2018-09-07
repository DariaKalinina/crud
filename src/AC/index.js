import {
  CHANGE, DELETE, ADD, SAVE, CHANGE_PAGE
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

export function addItem(data) {
    return {
      type: ADD,
      payload: { data }
    }
}

export function saveItem(data) {
  return {
    type: SAVE,
    payload: data
  }
}

export function changePage(id, data = {}) {
  return {
    type: CHANGE_PAGE,
    payload: id,
    data: data
  }
}

