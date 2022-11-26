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

const CharactersList = ({ characters, getCharactersList, next, prev }) => {
  const [api, setApi] = useState("https://rickandmortyapi.com/api/character");
  useEffect(() => {
    getCharactersList(api);
  }, [api]);

  return (
    <div className="characters">
      <div className="characters__list">
        <div className="characters__list-items">
          {characters.map((character) => (
            <div key={character.id}>
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
        <Pagination setApi={setApi} next={next} prev={prev} />
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
