import React, { Component } from 'react';
import './../index.css';
import {connect} from 'react-redux'
import PersonList from './PersonList';
import ChangePage from './ChangePage';

class NoteBook extends Component {
  render() {
    const isOpen = this.props.isOpen;
    console.log('isOpen', isOpen);
    return (
      <div className="noteBook">
        <PersonList isOpen={isOpen}/>
        <ChangePage isOpen={isOpen}/>
      </div>
    );
  }
}

export default connect(state => ( {
      isOpen: state.isOpen
    }))(NoteBook);
