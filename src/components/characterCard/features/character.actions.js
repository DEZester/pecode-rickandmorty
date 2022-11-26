import { fetchData } from "../../../gateway/gateway";

export const CHARACTER_DATA = "CHARACTER_DATA";

export const characterData = (data) => {
  return {
    type: CHARACTER_DATA,
    payload: {
      data,
    },
  };
};

export const getCharacterData = (url) => {
  return function (dispatch) {
    fetchData(url).then((charData) => {
      dispatch(characterData(charData));
    });
  };
};
