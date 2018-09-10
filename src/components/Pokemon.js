import React, { Component } from 'react';

class Pokemon extends Component {

  render() {
    let pokemonList = [];
    fetch('https://pokemon---api.herokuapp.com/api/v1/pokemon?limit=10')
      .then(response => { // вернет promise
        if (response.status < 200 || response.status > 299) {
          throw new Error(`Error code ${response.status}`);
        }
        return response.json(); // вернет promise
      })
      .then(data => {
        pokemonList = data;
        console.log('pokemonList -------------', pokemonList);
        return pokemonList;

      })
      .catch(error => {
        console.error(error);
        alert(`Ошибка: ${error.message}`);
      });

    console.log('pokemonList -------------22222', pokemonList);
    return (
      <div className="pokemon">
        <h2>Привет, я Покемон!</h2>
        <ul>
          {
            pokemonList.map( (pokemon) => {
              console.log('pokemon -------------', pokemon);
              return <li className="personList__item" key={pokemon.id}>pokemon.name</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Pokemon
