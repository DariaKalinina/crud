import data from '../data';

localStorage.data = JSON.stringify(data);

export default function personList(state = JSON.parse(localStorage.data), action) {
  const { type, payload } = action;

  // switch (type) {
  //   case ADD:
  // }

  return state
}
