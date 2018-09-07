import { CHANGE_PAGE } from './../constants';
console.log('localStorage', localStorage);

localStorage.isOpen = 'personList';

export default function changePage(state = localStorage.isOpen, action) {
  const { type, payload } = action;
  console.log('type и payload нет', type, payload);

  switch (type) {
    case CHANGE_PAGE:
      localStorage.isOpen = payload;
      return localStorage.isOpen
  }
  console.log('state', state);
  return state
}
