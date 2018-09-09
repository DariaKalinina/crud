import React, { Component } from 'react';
import './../index.css';
import {connect} from 'react-redux'
import PersonList from './PersonList';
import Form from './Form';

class NoteBook extends Component {

  render() {
    const {currentPage, id} = this.props;
    return (
      <div className="noteBook">
        {
          (currentPage === 'personList') ?
            <PersonList /> :
            <Form id={id}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  id: state.personId
});

export default connect( mapStateToProps)(NoteBook);
