import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as locationsActions from "./features/locations.actions";
import * as locationsSelectors from "./features/locations.selectors";
import LocationsListItem from "./LocationsListItem/LocationsListItem";
import Pagination from "../pagination/Pagination";
import SearchField from "../searchField/SearchField";

const Locations = ({ getLocationsData, locations, next, prev }) => {
  const [searchValue, setSearchValue] = useState("");

  const api = `https://rickandmortyapi.com/api/location/?name=${searchValue}`;

  useEffect(() => {
    getLocationsData(api);
  }, []);

  const changeHandler = (event) => {
    setSearchValue(event.target.value);
    if (searchValue.length < 1) {
      getLocationsData("https://rickandmortyapi.com/api/location");
    }
  };

  const searchHandler = () => {
    getLocationsData(api);
  };

  return (
    <div className="locations">
      <SearchField
        placeholderText="location"
        searchValue={searchValue}
        searchHandler={searchHandler}
        changeHandler={changeHandler}
      />
      <table className="table">
        <thead>
          <tr className="table__info">
            <th className="table__info-item">№</th>
            <th className="table__info-item">Name</th>
            <th className="table__info-item">Type</th>
            <th className="table__info-item">Dimension</th>
            <th className="table__info-item">Created</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => (
            <LocationsListItem
              key={location.id}
              number={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              created={location.created}
            />
          ))}
        </tbody>
      </table>
      <Pagination next={next} prev={prev} setApi={getLocationsData} />
    </div>
  );
};

const mapState = (state) => {
  return {
    locations: locationsSelectors.locationsListSelector(state),
    next: locationsSelectors.nextPageLocationsSelector(state),
    prev: locationsSelectors.prevPageLocationsSelector(state),
  };
};

const mapDispatch = {
  getLocationsData: locationsActions.getLocationsData,
};

export default connect(mapState, mapDispatch)(Locations);
