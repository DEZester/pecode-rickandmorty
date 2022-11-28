import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as episodesActions from "./features/episodes.actions";
import {
  episodesSelector,
  nextPageEpisodesSelector,
  prevPageEpisdoesSelector,
} from "./features/episodes.selectors";
import EpisodesListItem from "./episodesListItem/EpisodesListItem";
import Pagination from "../pagination/Pagination";

const EpisodesList = ({ getEpisodesData, episodes, next, prev }) => {
  const [episodesApi, setEpisodesApi] = useState(
    "https://rickandmortyapi.com/api/episode"
  );
  useEffect(() => {
    getEpisodesData(episodesApi);
  }, [episodesApi]);

  return (
    <div className="episodes">
      <table className="episodes__table">
        <thead>
          <tr className="episodes__info">
            <th className="episodes__info-item">№</th>
            <th className="episodes__info-item">Name</th>
            <th className="episodes__info-item">Air Date</th>
            <th className="episodes__info-item">Created</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode) => (
            <EpisodesListItem
              key={episode.id}
              name={episode.name}
              number={episode.id}
              airDate={episode.air_date}
              created={episode.created}
            />
          ))}
        </tbody>
      </table>
      <Pagination next={next} prev={prev} setApi={setEpisodesApi} />
    </div>
  );
};

const mapState = (state) => {
  return {
    episodes: episodesSelector(state),
    next: nextPageEpisodesSelector(state),
    prev: prevPageEpisdoesSelector(state),
  };
};

const mapDispatch = {
  getEpisodesData: episodesActions.getEpisodesData,
};

export default connect(mapState, mapDispatch)(EpisodesList);
