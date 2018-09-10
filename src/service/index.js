import data from '../data';

class MyStorage {
  constructor(data) {
    this.dbName = 'userList';

    //если нет выжеленной ячейки памяти с данными, то иницируем ячейку
    if (this.storage === undefined) {
      this.init(data);
    }
  };

  // инициируются данные для отправки в сеттер, где будут записаны
  init = (data) => {
    this.storage = data;
  };

  // геттер получает данные из ячейку памяти
  get storage() {
    const { dbName } = this;
    if (localStorage[dbName] !== undefined) {
      return JSON.parse(localStorage[dbName]);
    }
  };

  // сеттер в ячейку памяти записывает данные
  set storage(storage) {
    const { dbName } = this;
    return localStorage[dbName] = JSON.stringify(storage);
  };

  addUser = (person, id) => {
    const store = this.storage;
    store.push({id: id, ...person});
    this.storage = store;
  };

  changeUser = (person, id, rewrite) => {
    const store = this.storage;
    store.splice(rewrite, 1, {...person, id: id});
    this.storage = store;
  };

  deleteUser = (deleteIndex) => {
    const store = this.storage;
    store.splice(deleteIndex, 1);
    this.storage = store;
  };
}

const myStorage = new MyStorage(data);

export default myStorage;
