import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as locationsActions from "./features/locations.actions";
import * as locationsSelectors from "./features/locations.selectors";
import LocationsListItem from "./LocationsListItem/LocationsListItem";
import Pagination from "../pagination/Pagination";
import SearchField from "../searchField/SearchField";
import { locationsTypes, locationsDimensions } from "./features/data";
import Filter from "../filter/Filter";

// let arr = [];
// locations.forEach((element) => {
//   arr.push(element.dimension);
// });

const Locations = ({ getLocationsData, locations, next, prev }) => {
  const [searchValue, setSearchValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [dimensionValue, setDimensionValue] = useState("");
  const baseUrl = "https://rickandmortyapi.com/api/location";
  const api = `${baseUrl}?name=${searchValue}&type=${typeValue}&dimension=${dimensionValue}`;

  useEffect(() => {
    getLocationsData(api);
  }, [api]);

  const changeHandler = (event) => {
    setSearchValue(event.target.value);
    if (!searchValue) {
      getLocationsData(baseUrl);
    }
  };

  return (
    <div className="locations">
      <div className="locations__list">
        <SearchField
          placeholderText="location"
          searchValue={searchValue}
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
      <div className="locations__filters">
        <h1 className="locations__title">Filter</h1>
        <div
          className="locations__clearFilter"
          onClick={() => getLocationsData(baseUrl)}
        >
          Clear Filters
        </div>
        <Filter
          filterName={`Type`}
          data={locationsTypes}
          changeHandler={setTypeValue}
        />
        <Filter
          filterName={`Dimension`}
          data={locationsDimensions}
          changeHandler={setDimensionValue}
        />
      </div>
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
