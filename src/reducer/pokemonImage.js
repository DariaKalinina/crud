import { START_IMG_LOADING, IMG_LOADED, FAIL_IMG_LOADING} from './../constants';

const defaultState = {
  loading: false,
  error: false,
  pokemonImg: {},
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  const newState = {...state};

  switch (type) {
    case START_IMG_LOADING: {
      newState.loading = true;
      newState.error = false;
      return newState;
    }

    case IMG_LOADED: {
      newState.loading = false;
      newState.error = false;
      newState.pokemonImg = payload;
      return newState;
    }

    case FAIL_IMG_LOADING: {
      newState.loading = false;
      newState.error = 'Произошла ошибка при запроосе к серверу';
      return newState;
    }

    default: {
      return state;
    }
  }
}