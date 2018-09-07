import React, { Component } from 'react';
import './../index.css';

class ChangePage extends Component {

  render() {
    const {isOpen} = this.props;
    console.log('this.props ChangePage=====================', this.props);
    if (isOpen !== 'changePage') return null;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input type="text" value={1} onChange={this.handleChange} />
        </label>
        <label>
          Фамилия:
          <input type="text" value={2} onChange={this.handleChange} />
        </label>
        <label>
          Телефон:
          <input type="text" value={3} onChange={this.handleChange} />
        </label>
        <label>
          Электронная почта:
          <input type="text" value={4} onChange={this.handleChange} />
        </label>
        <br/>
        <input type="submit" className="button__link" value="Сохранить" />
      </form>
    );
  }
}

export default ChangePage;
