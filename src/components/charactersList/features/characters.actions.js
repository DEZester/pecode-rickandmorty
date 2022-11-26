import { fetchData } from "../../../gateway/gateway";

export const CHARACTERS_DATA = "CHARACTERS_DATA";

export const charactersData = (data) => {
  return {
    type: CHARACTERS_DATA,
    payload: {
      data,
    },
  };
};

export const getCharactersData = (url) => {
  return function (dispatch) {
    fetchData(url).then((charData) => {
      dispatch(charactersData(charData));
    });
  };
};
