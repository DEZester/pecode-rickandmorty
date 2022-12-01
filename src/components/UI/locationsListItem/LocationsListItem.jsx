import moment from "moment";

const LocationsListItem = ({ name, created, number, type, dimension }) => {
  return (
    <tr className="table__info">
      <th className="table__info-item">{number}</th>
      <th className="table__info-item">{name}</th>
      <th className="table__info-item">{type}</th>
      <th className="table__info-item">{dimension}</th>
      <th className="table__info-item">
        {moment(created).format(" MMMM Do YYYY")}
      </th>
    </tr>
  );
};

export default LocationsListItem;
