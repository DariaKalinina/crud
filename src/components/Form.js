import React, { Component } from 'react';
import {changePage, saveItem, back} from './../AC';
import {connect} from 'react-redux';
import './../index.css';

class Form extends Component {
  constructor(props) {
    super(props);
    console.log('пропсы из конструктора', this.props);
    this.state = {
      name: this.props.id ? this.props.persons[this.props.id].name : '',
      surname: this.props.id ? this.props.persons[this.props.id].surname : '',
      phone: this.props.id ? this.props.persons[this.props.id].phone : '',
      email: this.props.id ? this.props.persons[this.props.id].email : '',
    };
  };

  handleSubmit = (e) => {
    const {changePage, saveItem, id} = this.props;
    e.preventDefault();
    saveItem((id ? id : null), this.state);
    changePage('personList');
  };

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value});
  };

  backClick = e => {
    const {changePage, back} = this.props;
    e.preventDefault();
    changePage('personList');
    back();
  };

  render() {
    const placeholder = 'Введите значение';
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        Имя:
        <input type="text" name="name" value={this.state.name} placeholder={placeholder} onChange={this.handleChange} />
        Фамилия:
        <input type="text" name="surname" value={this.state.surname} placeholder={placeholder} onChange={this.handleChange} />
        Телефон:
        <input type="text" name="phone" value={this.state.phone} placeholder={placeholder} onChange={this.handleChange} />
        Электронная почта:
        <input type="text" name="email" value={this.state.email} placeholder={placeholder} onChange={this.handleChange} />
        <br/>
        <input type="submit" className="button__link" value="Сохранить" />
        <br/>
        <div className="button">
          <a href="#" className="button__link" onClick={this.backClick}>Назад</a>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons
});

export default connect(mapStateToProps, {changePage, saveItem, back})(Form);
