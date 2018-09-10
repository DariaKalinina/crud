import data from '../data';

class MyStorage {
  constructor(data) {
    this.dbName = 'userList';
    console.log('constructor ----');
    //если нет выжеленной ячейки памяти с данными, то иницируем ячейку
    if (this.storage === undefined) {
      this.init(data);
    }
  }

  // инициируются данные для отправки в сеттер, где будут записаны
  init = (data) => {
    console.log('init-------');
    this.storage = data;
  };

  // геттер получает данные из ячейку памяти
  get storage() {
    const { dbName } = this;
    console.log('get storage undefined -------');
    if (localStorage[dbName] !== undefined) {
      console.log('get storage  -------');
      return JSON.parse(localStorage[dbName]);
    }
  }

  // сеттер в ячейку памяти записывает данные
  set storage(storage) {
    const { dbName } = this;
    console.log('set storage  -------');
    return localStorage[dbName] = JSON.stringify(storage);
  }

  addUser = (data) => {

  }

  changeUser = (data) => {

  }

  deleteUser = (id) => {

  }
}

const myStorage = new MyStorage(data);

export default myStorage;



// const store = myStorage.storage;
// store[2323432] = {
//   name: 'Серёженька'
// };
//
// myStorage.storage = store;