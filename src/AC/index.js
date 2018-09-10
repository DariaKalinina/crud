import {
  DELETE, SAVE, CHANGE, CHANGE_PAGE, BACK, FETCH_DATA
} from '../constants';

export function change(id) {
  return {
    type: CHANGE,
    payload: id
  }
}

export function back() {
  return {
    type: BACK
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

export function fetchData(array, url) {
  return {
    type: FETCH_DATA,
    payload: array,
    url: url
  }
}
