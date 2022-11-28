import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  charactersSelector,
  nextPageSelector,
  prevPageSelector,
} from "./features/characters.selectors";
import CharactersListItem from "./сharactersListItem/CharactersListItem";
import * as charactersActions from "./features/characters.actions";
import Pagination from "../pagination/Pagination";
import { useNavigate } from "react-router-dom";

const CharactersList = ({ characters, getCharactersList, next, prev }) => {
  const [charactersApi, setCharactersApi] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const navigate = useNavigate();
  useEffect(() => {
    getCharactersList(charactersApi);
  }, [charactersApi]);

  return (
    <div className="characters">
      <div className="characters__list">
        <div className="characters__list-items">
          {characters.map((character) => (
            <div
              className={`characters__list-item_${character.id}`}
              key={character.id}
              onClick={() => navigate(`/character/${character.id}`)}
            >
              <CharactersListItem
                img={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                origin={character.origin.name}
                location={character.location.name}
              />
            </div>
          ))}
        </div>
        <Pagination setApi={setCharactersApi} next={next} prev={prev} />
      </div>
      <div className="characters__sort">
        <select id="test" className="characters__sort-select">
          <option>Species</option>
          <option>Status</option>
          <option>gender</option>
        </select>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    characters: charactersSelector(state),
    next: nextPageSelector(state),
    prev: prevPageSelector(state),
  };
};

const mapDispatch = {
  getCharactersList: charactersActions.getCharactersData,
};

export default connect(mapState, mapDispatch)(CharactersList);
