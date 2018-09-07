import data from '../data';

localStorage.data = JSON.stringify(data);
console.log('localStorage.data', localStorage.data);

export default function personList(state = JSON.parse(localStorage.data), action) {
  const { type, payload } = action;
  console.log('type и payload нет', type, payload);

  // switch (type) {
  //   case DELETE_ARTICLE:
  //     return articles.deleteIn(['entities', payload.id])
  // }
  console.log('state', state);
  return state
}
