import React, { Component } from 'react';
import {connect} from 'react-redux';
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
    const {persons} = this.props;
    return (
      <div className="wrapper-personList">
        <ul className="personList">
          {
            persons.map( (person) => (
                <li className="personList__item" key={person.id}>
                  <Person person={person} id={person.id}/>
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

const mapStateToProps = (state) => ({
  persons: state.persons
});

export default connect( mapStateToProps, {changePage})(PersonList);
