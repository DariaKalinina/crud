import React, { Component } from 'react';
import {getPokemonFetch} from "../service/fetch";

class Pokemon extends Component {
  componentDidMount() {
    let res = getPokemonFetch();
    res.then(data => console.log('супер дата', data))
      .catch(reason => console.log(reason.message));
  }


  render() {
    return (
      <div className="pokemon">
        <h2>Привет, я Покемон!</h2>
        <ul>
          {/*{*/}
            {/*pokemonList.map( (pokemon) => {*/}
              {/*console.log('pokemon -------------', pokemon);*/}
              {/*return <li className="personList__item" key={pokemon.id}>pokemon.name</li>*/}
            {/*})*/}
          {/*}*/}
        </ul>
      </div>
    )
  }
}

export default Pokemon
