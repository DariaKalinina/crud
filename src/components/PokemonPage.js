import React, { Component } from 'react';
import {connect} from "react-redux";
import './../index.css';

class PokemonPage extends Component {

  render() {
    const {
      loading,
      error,
      pokemonImg,
    } = this.props;


    if (loading) {
      return (
        <div className="pokemonList">
          <h6>Is loading</h6>
        </div>
      )
    }

    if (error) {
      return (
        <div className="pokemonList">
          <h6>Error: {error}</h6>
        </div>
      )
    }

    return (
      <div className="pokemonList">
        {
          (!!Object.keys(pokemonImg).length)
            ? <h6 className="pokemonList__title pokemonList__title--little">Привет, я {pokemonImg.name}!</h6>
            : <h6 className="pokemonList__title pokemonList__title--little">Нажми на покемона!</h6>
        }
        <div className="pokemonList__page">
          <img src={pokemonImg.ThumbnailImage} alt={pokemonImg.name}/>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.pokemonImage.loading,
  error: state.pokemonImage.error,
  pokemonImg: state.pokemonImage.pokemonImg,
});

export default connect( mapStateToProps )(PokemonPage);
