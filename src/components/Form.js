import React, { Component } from 'react';
import {changePage, saveChangeItem, saveNewItem, back} from './../AC';
import {connect} from 'react-redux';
import './../index.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.person ? this.props.person.name : '',
      surname: this.props.person ? this.props.person.surname : '',
      phone: this.props.person ? this.props.person.phone : '',
      email: this.props.person ? this.props.person.email : '',
    };
  };

  handleSubmit = (e) => {
    const {changePage, saveChangeItem, saveNewItem, person} = this.props;
    e.preventDefault();
    const personState = this.state;
    person ? saveChangeItem( person.id, personState) : saveNewItem(null, personState);
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
  person: state.person
});

export default connect(mapStateToProps, {changePage, saveChangeItem, saveNewItem, back})(Form);
