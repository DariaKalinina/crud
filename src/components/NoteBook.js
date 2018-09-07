import React, { Component } from 'react';
import './../index.css';
import {connect} from 'react-redux'
import PersonList from './PersonList';
import ChangePage from './ChangePage';

class NoteBook extends Component {


  render() {
    const currentPage = this.props.currentPage;
    return (
      <div className="noteBook">
        {
          (currentPage.currentPage === 'personList') ?
            <PersonList /> :
            <ChangePage currentPage={currentPage}/>
        }
        {/*<PersonList currentPage={currentPage}/>*/}
        {/*<ChangePage currentPage={currentPage} />*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPage: state.currentPage
});

export default connect( mapStateToProps)(NoteBook);
