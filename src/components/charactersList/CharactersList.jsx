import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as charactersSelector from './features/characters.selectors';
import * as charactersActions from './features/characters.actions';
import CharactersListItem from '../UI/сharactersListItem/CharactersListItem';
import Pagination from '../UI/pagination/Pagination';
import FilterLayout from '../UI/filterLayout/FilterLayout';
import Filter from '../UI/filter/Filter';
import { charactersStatuses, charactersSpecieses, charactersGenders } from './features/data';

const CharactersList = ({ characters, getCharactersList, next, prev }) => {
  const [statusValue, setStatusValue] = useState('');
  const [speciesValue, setSpeciesValue] = useState('');
  const [genderValue, setGenderValue] = useState('');

  const baseUrl = `https://rickandmortyapi.com/api/character/`;
  let api = `${baseUrl}?status=${statusValue}&species=${speciesValue}&gender=${genderValue}`;

  const navigate = useNavigate();

  useEffect(() => {
    getCharactersList(api);
  }, [api]);

  return (
    <div className="characters">
      <FilterLayout clearFilters={getCharactersList} baseUrl={baseUrl}>
        <Filter data={charactersStatuses} filterName={'Status'} changeHandler={setStatusValue} />
        <Filter data={charactersSpecieses} filterName={'Species'} changeHandler={setSpeciesValue} />
        <Filter data={charactersGenders} filterName={'Gender'} changeHandler={setGenderValue} />
      </FilterLayout>
      <div className="characters__list">
        <div className="characters__list-items">
          {characters.map(character => (
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
        <Pagination setApi={getCharactersList} next={next} prev={prev} />
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    characters: charactersSelector.charactersSelector(state),
    next: charactersSelector.nextPageSelector(state),
    prev: charactersSelector.prevPageSelector(state),
  };
};

const mapDispatch = {
  getCharactersList: charactersActions.getCharactersData,
};

export default connect(mapState, mapDispatch)(CharactersList);
