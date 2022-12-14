import moment from "moment";

const EpisodesListItem = ({ name, created, number, airDate }) => {
  return (
    <tr className="table__info">
      <th className="table__info-item">{number}</th>
      <th className="table__info-item">{name}</th>
      <th className="table__info-item">{airDate}</th>
      <th className="table__info-item">
        {moment(created).format(" MMMM Do YYYY")}
      </th>
    </tr>
  );
};

export default EpisodesListItem;
