import { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as episodesActions from "./features/episodes.actions";
import * as episodesSelector from "./features/episodes.selectors";
import EpisodesListItem from "./episodesListItem/EpisodesListItem";
import Pagination from "../pagination/Pagination";
import SearchField from "../searchField/SearchField";

const EpisodesList = ({ getEpisodesData, episodes, next, prev }) => {
  const [searchValue, setSearchValue] = useState("");

  let api = `https://rickandmortyapi.com/api/episode/?name=${searchValue}`;

  useEffect(() => {
    getEpisodesData(api);
  }, [api]);

  const changeHandler = (event) => {
    setSearchValue(event.target.value);
    if (searchValue.length < 1) {
      getEpisodesData("https://rickandmortyapi.com/api/episode");
    }
  };

  return (
    <div className="episodes">
      <SearchField
        placeholderText="episode"
        searchValue={searchValue}
        changeHandler={changeHandler}
      />
      <table className="table">
        <thead>
          <tr className="table__info">
            <th className="table__info-item">№</th>
            <th className="table__info-item">Name</th>
            <th className="table__info-item">Air Date</th>
            <th className="table__info-item">Created</th>
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
      <Pagination next={next} prev={prev} setApi={getEpisodesData} />
    </div>
  );
};

const mapState = (state) => {
  return {
    episodes: episodesSelector.episodesListSelector(state),
    next: episodesSelector.nextPageEpisodesSelector(state),
    prev: episodesSelector.prevPageEpisdoesSelector(state),
  };
};

const mapDispatch = {
  getEpisodesData: episodesActions.getEpisodesData,
};

export default connect(mapState, mapDispatch)(EpisodesList);
