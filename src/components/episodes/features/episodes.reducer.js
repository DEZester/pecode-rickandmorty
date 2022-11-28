import { EPISODES_DATA } from "./episodes.actions";

const initialState = {
  next: null,
  prev: null,
  episodesList: [],
};

const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EPISODES_DATA:
      const { results } = action.payload.data;
      const { next, prev } = action.payload.data.info;
      return {
        ...state,
        next: next,
        prev: prev,
        episodesList: results,
      };
    default:
      return state;
  }
};

export default episodesReducer;
