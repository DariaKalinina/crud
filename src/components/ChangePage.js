import React, { Component } from 'react';
import {changePage} from './../AC';
import {connect} from 'react-redux';
import './../index.css';

class ChangePage extends Component {
  constructor(props) {
    super(props);
    console.log('проасы из конструктора', this.props);
    this.state = {
      name: this.props.data.name || '',
      surname: this.props.data.surname || '',
      phone: this.props.data.phone || '',
      email: this.props.data.email || '',
    };
  };



  handleSubmit = (e) => {
    const {changePage} = this.props;
    e.preventDefault();
    changePage('personList');
  };

  handleChange = ({target}) => {
    this.setState({[target.id]: target.value});
  };

  render() {
    const {currentPage, data} = this.props;
    const placeholder = 'Введите значение';
    console.log('currentPage, data ChangePage=====================',data);
    // if (currentPage.currentPage !== 'changePage') {
    //   return null;
    // }
    return (
      <form className="form" onSubmit={this.handleSubmit}>
          Имя:
          <input type="text" id="name" value={this.state.name} placeholder={placeholder} onChange={this.handleChange} />
          Фамилия:
          <input type="text" id="surname" value={this.state.surname} placeholder={placeholder} onChange={this.handleChange} />
          Телефон:
          <input type="text" id="phone" value={this.state.phone} placeholder={placeholder} onChange={this.handleChange} />
          Электронная почта:
          <input type="text" id="email" value={this.state.email} placeholder={placeholder} onChange={this.handleChange} />
        <br/>
        <input type="submit" className="button__link" value="Сохранить" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.currentPage.data
});

export default connect( mapStateToProps, {changePage})(ChangePage);
