import {
  DELETE, SAVE_CHANGE, SAVE_NEW_ITEM, CHANGE, CHANGE_PAGE, BACK, START_POKE_LOADING, POKE_LOADED, FAIL_POKE_LOADING, START_IMG_LOADING, IMG_LOADED, FAIL_IMG_LOADING
} from '../constants';

export function change(id) {
  return {
    type: CHANGE,
    payload: id
  }
}

export function back() {
  return {
    type: BACK
  }
}

export function deleteItem(id) {
  return {
    type: DELETE,
    payload: id
  }
}

export function saveChangeItem(id, data) {
  return {
    type: SAVE_CHANGE,
    payload: {data},
    id: id
  }
}

export function saveNewItem(id = null, data) {
  return {
    type: SAVE_NEW_ITEM,
    payload: data,
    generateId: id
  }
}

export function changePage(string) {
  return {
    type: CHANGE_PAGE,
    payload: string
  }
}

//Загрузка списка покемонов
export const startLoadingPokemons = () => ({
  type: START_POKE_LOADING,
});

export const pokemonsLoaded = (pokemons) => ({
  type: POKE_LOADED,
  payload: pokemons,
});

export const failLoadingPokemons = () => ({
  type: FAIL_POKE_LOADING,
});

export const loadFromAPI = (url) => (dispatch) => {
    dispatch(startLoadingPokemons());

    fetch(url)
      .then(res => {
        if (res.status < 200 || res.status > 299) {
          throw new Error(`Uncorrect status code: ${res.status}`);
        }

        return res.json();
      })
      .then(pokemons => dispatch(pokemonsLoaded(pokemons)))
      .catch(error => {
        console.error(error);
        alert(`Ошибка: ${error}`);
        dispatch(failLoadingPokemons());
      });
};

//загрузка картинки покемона
export const startLoadingPokemonImg = () => ({
  type: START_IMG_LOADING,
});

export const pokemonImgLoaded = (pokemonImg) => ({
  type: IMG_LOADED,
  payload: pokemonImg,
});

export const failLoadingPokemonImg = () => ({
  type: FAIL_IMG_LOADING,
});
export const loadPokemonImgFromAPI = (name) => (dispatch) => {
  dispatch(startLoadingPokemonImg());
  const url = 'https://pokemon---api.herokuapp.com/api/v1/pokemon/' + name.pokemonName;

  fetch(url)
    .then(res => {
      if (res.status < 200 || res.status > 299) {
        throw new Error(`Uncorrect status code: ${res.status}`);
      }

      return res.json();
    })
    .then(pokemonImg => dispatch(pokemonImgLoaded(pokemonImg)))
    .catch(error => {
      console.error(error);
      alert(`Ошибка: ${error}`);
      dispatch(failLoadingPokemonImg());
    });
};

