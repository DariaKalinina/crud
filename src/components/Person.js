import React, { Component } from 'react';
import {changePage} from './../AC';
import './../index.css';
import {connect} from "react-redux";

class Person extends Component {
  handleClick = e => {
    const {changePage, person} = this.props;
    e.preventDefault();
    changePage('changePage', person);
  };

  render() {
  const { person } = this.props;
    return (
      <div className="person">
        <div className="person__item person__item--text-bold">{person.name} {person.surname}</div>
        <div className="person__item">Телефон: {person.phone}</div>
        <div className="person__item">Электронная почта: {person.email}</div>
        <div className="button">
          <a href="#" className="button__link" onClick={this.handleClick}>Изменить</a>
        </div>
        <div className="button">
          <a href="#" className="button__link">Удалиить</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons
});

export default connect( mapStateToProps, {changePage})(Person);
