import { START_POKE_LOADING, POKE_LOADED, FAIL_POKE_LOADING} from './../constants';

const defaultState = {
  loading: false,
  error: false,
  pokemons: [],
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  const newState = {...state};

  switch (type) {
    case START_POKE_LOADING: {
      newState.loading = true;
      newState.error = false;
      return newState;
    }

    case POKE_LOADED: {
      newState.loading = false;
      newState.error = false;
      newState.pokemons = payload;
      return newState;
    }

    case FAIL_POKE_LOADING: {
      newState.loading = false;
      newState.error = 'Произошла ошибка при запроосе к серверу';
      return newState;
    }

    default: {
      return state;
    }
  }
}