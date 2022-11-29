import { fetchData } from "../../../gateway/gateway";

export const LOCATIONS_DATA = "LOCATIONS_DATA";

export const locationsData = (data) => {
  return {
    type: LOCATIONS_DATA,
    payload: {
      data,
    },
  };
};

export const getLocationsData = (url) => {
  return function (dispatch) {
    fetchData(url).then((charData) => {
      dispatch(locationsData(charData));
    });
  };
};
