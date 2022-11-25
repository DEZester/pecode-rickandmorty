const CharactersListItem = () => {
  return (
    <div className="character">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/71.jpeg"
        alt="logo"
        className="character__card-img"
      />
      <div className="character__card-info">
        <h2 className="character__name">Name</h2>
        <div className="character__status">
          <div className="character__status-color"></div>
          <span className="character__isAlive">Alive</span>
        </div>
        <div className="character__info-container">
          <span className="character__title-info">species</span>
          <span className="character__info">Human</span>
          <span className="character__title-info">origin</span>
          <span className="character__info">Earth (C-137) • Planet</span>
          <span className="character__title-info">location</span>
          <span className="character__info">
            Citadel of Ricks • Space station
          </span>
        </div>
      </div>
    </div>
  );
};
export default CharactersListItem;
