const CharacterCard = () => {
  return (
    <div className="characterCard">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="char-img"
        className="characterCard__img"
      />
      <h1 className="characterCard__name">Name</h1>

      <div className="characterCard__info-block">
        <span className="characterCard__title-info">status</span>
        <span className="characterCard__info">Rick</span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">species</span>
        <span className="characterCard__info">Rick</span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">gender</span>
        <span className="characterCard__info">Rick</span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">type</span>
        <span className="characterCard__info">Rick</span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">origin</span>
        <span className="characterCard__info">Rick</span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">location</span>
        <span className="characterCard__info">Rick</span>
      </div>
      <div className="characterCard__info-block">
        <span className="characterCard__title-info">episodes</span>
        <span className="characterCard__info">Rick</span>
      </div>
    </div>
  );
};

export default CharacterCard;
