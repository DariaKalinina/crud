import React, { Component } from 'react';
import {connect} from "react-redux";
import {loadFromAPI, loadPokemonImgFromAPI} from './../AC';
import './../index.css';
import PokemonPage from "./PokemonPage";

class PokemonList extends Component {
  componentDidMount() {
    this.props.loadFromAPI('https://pokemon---api.herokuapp.com/api/v1/pokemon?limit=10');
  }

  bindAction = ({ action, pokemonName }) => (e) => {
    e.preventDefault();
    action({ pokemonName });
  };

  render() {
    const {
      loading,
      error,
      pokemonsList,
    } = this.props;

    if (loading) {
      return (
        <div className="pokemonList">
          <h2>Is loading</h2>
        </div>
      )
    }

    if (error) {
      return (
        <div className="pokemonList">
          <h2 >Error: {error}</h2>
        </div>
      )
    }

    if (!pokemonsList.length) {
      return (
        <div className="pokemonList">
          <h2 className="pokemonList__title">Покемоны не пойманы</h2>
        </div>
      )
    }

    return (
      <div className="pokemonList">
        <h2 className="pokemonList__title">Привет, мы Покемоны!</h2>
        <div className="pokemonList__wrapper">
          <ul className="pokemonList__list">
            {pokemonsList.map((item) =>
              <li className="pokemonList__item" key={item.id + item.weight}>
                <a
                  href="#"
                  className="pokemonList__link"
                  onClick={this.bindAction({
                    action: this.props.loadPokemonImgFromAPI,
                    pokemonName: item.name,
                  })}
                >
                  { item.name }
                </a>
              </li>
            )}
          </ul>
          <PokemonPage />
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.pokemonState.loading,
  error: state.pokemonState.error,
  pokemonsList: state.pokemonState.pokemons,
});

export default connect( mapStateToProps, {loadFromAPI, loadPokemonImgFromAPI})(PokemonList);
