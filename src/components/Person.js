import React, { Component } from 'react';
import {changePage, deleteItem, change} from './../AC';
import './../index.css';
import {connect} from "react-redux";

class Person extends Component {
  changeClick = e => {
    const {changePage, change, id, person} = this.props;
    e.preventDefault();
    change(person, id);
    changePage('changePage');
  };

  deleteClick = (e) => {
    const {deleteItem, id} = this.props;
    e.preventDefault();
    deleteItem(id);
  };

  render() {
  const { person } = this.props;
    return (
      <div className="person">
        <div className="person__item person__item--text-bold">{person.name} {person.surname}</div>
        <div className="person__item">Телефон: {person.phone}</div>
        <div className="person__item">Электронная почта: {person.email}</div>
        <div className="button">
          <a href="#" className="button__link" onClick={this.changeClick}>Изменить</a>
        </div>
        <div className="button">
          <a href="#" className="button__link" onClick={this.deleteClick}>Удалиить</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect( mapStateToProps, {changePage, change, deleteItem})(Person);
