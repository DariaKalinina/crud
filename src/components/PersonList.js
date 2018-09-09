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
    console.log('persons in PersonList', persons, Object.keys(persons));
    return (
      <div className="wrapper-personList">
        <ul className="personList">
          {
            Object.keys(persons).map( (id) => (
                <li className="personList__item" key={id}>
                  <Person person={persons[id]} id={id}/>
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
