import React, { Component } from 'react';
import NoteBook from './NoteBook';
import Pokemon from './Pokemon';
import './../index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__title">Записная книга</h1>
        </header>
        <NoteBook />
        <Pokemon />
      </div>
    );
  }
}

export default App;
