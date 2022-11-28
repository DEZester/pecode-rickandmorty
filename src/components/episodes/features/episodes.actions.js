import { fetchData } from "../../../gateway/gateway";

export const EPISODES_DATA = "EPISODES_DATA";

export const episodesData = (data) => {
  return {
    type: EPISODES_DATA,
    payload: {
      data,
    },
  };
};

export const getEpisodesData = (url) => {
  return function (dispatch) {
    fetchData(url).then((charData) => {
      dispatch(episodesData(charData));
    });
  };
};
