import { CHANGE_PAGE } from './../constants';

const currentPageDefault = 'personList';

export default function changePage(currentPage = currentPageDefault, action) {
  const { type, payload} = action;

  switch (type) {
    case CHANGE_PAGE:
      currentPage = payload;
      return currentPage
  }
  return currentPage;
}
