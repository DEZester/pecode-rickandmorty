import CharactersListItem from "./сharactersListItem/CharactersListItem";

const CharactersList = () => {
  return (
    <div className="characters">
      <div className="characters__list">
        <div className="characters__list-items">
          <CharactersListItem />
          <CharactersListItem />
          <CharactersListItem />
        </div>
        <div>Pagination</div>
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

export default CharactersList;
