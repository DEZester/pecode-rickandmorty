import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import * as characterActions from "./features/character.actions";
import { characterSelector } from "./features/character.selectors";

const CharacterCard = ({ getCharacterData, character }) => {
  const param = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (param.id > 826 || isNaN(+param.id)) {
      navigate("*");
    }
    getCharacterData(`https://rickandmortyapi.com/api/character/${param.id}`);
  }, []);

  return character === null ? (
    <div>No Data</div>
  ) : (
    <div className="characterCard">
      <img
        src={character.image}
        alt="char-img"
        className="characterCard__img"
      />
      <h1 className="characterCard__name">{character.name || "name"}</h1>

      <div className="characterCard__info-block">
        <span className="characterCard__title-info">status</span>
        <span className="characterCard__info">{character.status}</span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">species</span>
        <span className="characterCard__info">{character.species}</span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">gender</span>
        <span className="characterCard__info">{character.gender}</span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">type</span>
        <span className="characterCard__info">
          {character.type ? character.type : "unknown"}
        </span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">origin</span>
        <span className="characterCard__info">
          {character.origin.name || "name"}
        </span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">location</span>
        <span className="characterCard__info">{character.location.name}</span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">episodes</span>
        <span className="characterCard__info">{character.episode.length}</span>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    character: characterSelector(state),
  };
};

const mapDispatch = {
  getCharacterData: characterActions.getCharacterData,
};

export default connect(mapState, mapDispatch)(CharacterCard);
