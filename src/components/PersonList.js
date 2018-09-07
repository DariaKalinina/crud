import React, { Component } from 'react';
import {connect} from 'react-redux'
import './../index.css';
import Person from './Person'
import {changePage} from './../AC';

class PersonList extends Component {
  handleClick = e => {
    const {changePage} = this.props;
    e.preventDefault();
    changePage('changePage');
  };

  render() {
    const {persons, isOpen} = this.props;
    console.log('this.props PersonList=====================', this.props);
    if (isOpen !== 'personList') return null;
    return (
      <div className="wrapper-personList">
        <ul className="personList">
          {
            persons.map( (person) => (
                <li className="personList__item" key={person.id}>
                  <Person person={person}/>
                </li>
              )
            )
          }
        </ul>
        <div className="button">
          <a href="#" className="button__link" onClick={this.handleClick}>Добавить</a>
        </div>
      </div>
    );
  }
}

export default connect(state => (
  console.log('state==============', state),
  {
    persons: state.persons
  }
), {changePage})(PersonList);
