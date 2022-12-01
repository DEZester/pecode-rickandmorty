const CharactersListItem = ({
  img,
  name,
  status,
  species,
  origin,
  location,
}) => {
  return (
    <div className="character">
      <img src={img} alt="logo" className="character__card-img" />
      <div className="character__card-info">
        <h2 className="character__name">{name}</h2>
        <div className="character__status">
          <div
            className={`character__status-color character__status-color_${status}`}
          ></div>
          <span className="character__isAlive">{status}</span>
        </div>
        <div className="character__info-container">
          <span className="character__title-info">species</span>
          <span className="character__info">{species}</span>
          <span className="character__title-info">origin</span>
          <span className="character__info">{origin}</span>
          <span className="character__title-info">location</span>
          <span className="character__info">{location}</span>
        </div>
      </div>
    </div>
  );
};
export default CharactersListItem;
