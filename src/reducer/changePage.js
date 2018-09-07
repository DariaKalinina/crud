import { CHANGE_PAGE } from './../constants';
console.log('localStorage', localStorage);

const currentPageDefault = {'currentPage': 'personList'};

export default function changePage(currentPage = currentPageDefault, action) {
  const { type, payload, data } = action;
  console.log('type и payload', type, payload, data);

  switch (type) {
    case CHANGE_PAGE:
      currentPage = payload;
      return {currentPage, data}
  }
  return currentPage;
}
