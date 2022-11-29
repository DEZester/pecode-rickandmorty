import { LOCATIONS_DATA } from "./locations.actions";

const initialState = {
  next: null,
  prev: null,
  locationsList: [],
};

const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS_DATA:
      const { results } = action.payload.data;
      const { next, prev } = action.payload.data.info;
      return {
        ...state,
        next: next,
        prev: prev,
        locationsList: results,
      };
    default:
      return state;
  }
};

export default locationsReducer;
