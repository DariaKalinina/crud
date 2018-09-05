import React, { Component } from 'react';
import {connect} from 'react-redux'
import './style.css';
import Person from '../Person'

class PersonList extends Component {
  render() {
    const {persons} = this.props;
    console.log('this.props', this.props);
    return (
      <ul className="personList">
        {
          persons.map( (person) => (
            <li key={person.id}>
              <Person person={person}/>
            </li>
            )
          )
        }
      </ul>
    );
  }
}

export default connect(state => (
  console.log('state==============', state),
  {
    persons: state.persons
  }
))(PersonList);
