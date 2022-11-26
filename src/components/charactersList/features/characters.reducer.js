import { CHARACTERS_DATA } from "./characters.actions";

const initialState = {
  next: null,
  prev: null,
  charactersList: [],
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS_DATA:
      const { results } = action.payload.data;
      const { next, prev } = action.payload.data.info;
      return {
        ...state,
        next: next,
        prev: prev,
        charactersList: results,
      };
    default:
      return state;
  }
};

export default charactersReducer;
