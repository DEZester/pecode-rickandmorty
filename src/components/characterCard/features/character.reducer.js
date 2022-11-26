import { CHARACTER_DATA } from "./character.actions";

const initialState = {
  characterData: null,
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_DATA:
      return {
        ...state,
        characterData: action.payload.data,
      };
    default:
      return state;
  }
};

export default characterReducer;
