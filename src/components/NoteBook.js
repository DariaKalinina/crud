import React, { Component } from 'react';
import './../index.css';
import {connect} from 'react-redux'
import PersonList from './PersonList';
import Form from './Form';

class NoteBook extends Component {

  render() {
    const {currentPage, person} = this.props;
    return (
      <div className="noteBook">
        {
          (currentPage === 'personList') ?
            <PersonList /> :
            <Form person={person}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  person: state.person
});

export default connect( mapStateToProps)(NoteBook);
