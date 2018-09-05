import data from '../data';

localStorage.setItem('data', JSON.stringify(data));
localStorage.data = JSON.stringify(data);
console.log('data', data);

export default function personList(state = data, action) {
  const { type, payload } = action;
  console.log('type и payload нет', type, payload);

  // switch (type) {
  //   case DELETE_ARTICLE:
  //     return articles.deleteIn(['entities', payload.id])
  // }
  console.log('state', state);
  return state
}
