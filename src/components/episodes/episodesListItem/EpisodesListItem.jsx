import moment from "moment";

const EpisodesListItem = ({ name, created, number, airDate }) => {
  return (
    <tr className="episodes__info">
      <th className="episodes__info-item">{number}</th>
      <th className="episodes__info-item">{name}</th>
      <th className="episodes__info-item">{airDate}</th>
      <th className="episodes__info-item">
        {moment(created).format(" MMMM Do YYYY")}
      </th>
    </tr>
  );
};

export default EpisodesListItem;
