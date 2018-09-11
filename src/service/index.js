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

  createUser = (id, person) => {
    const { name, surname, phone, email } = person;

    if ([name, surname, phone, email].some(el => el === undefined)) {
      return false;
    }

    return {
      id,
      name,
      surname,
      phone,
      email,
    };
  };

  addUser = (person, id) => {
    const store = this.storage;
    const newPerson = this.createUser(id, person);

    if (newPerson !== false) {
      store.push(newPerson);
      this.storage = store;
    }

    return newPerson;
  };

  changeUser = (person, id, rewritePersonIndex) => {
    const store = this.storage;
    const newPerson = this.createUser(id, person);

    if (newPerson !== false) {
      store.splice(rewritePersonIndex, 1, newPerson);
      this.storage = store;
    }

    return newPerson;
  };

  deleteUser = (deletePersonIndex) => {
    const store = this.storage;
    let res = store.splice(deletePersonIndex, 1);
    this.storage = store;

    return !!res.length;
  };
}

const myStorage = new MyStorage(data);

export default myStorage;
