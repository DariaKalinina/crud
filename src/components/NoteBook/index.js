import React, { Component } from 'react';
import './style.css';
import PersonList from '../PersonList'

class NoteBook extends Component {
  render() {
    return (
      <div className="noteBook">
        <PersonList />
      </div>
    );
  }
}

export default NoteBook;
