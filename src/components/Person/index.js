import React, { Component } from 'react';
import './style.css';

class Person extends Component {

  render() {
  const { person } = this.props;
    return (
      <div className="person">
        <div className="person__item person__item--text-bold">{person.name} {person.surname}</div>
        <div className="person__item">Телефон: {person.phone}</div>
        <div className="person__item">Электронная почта: {person.email}</div>
      </div>
    );
  }
}

export default Person;
