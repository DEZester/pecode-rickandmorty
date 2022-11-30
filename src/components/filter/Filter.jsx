const Filter = ({ data, filterName, changeHandler }) => {
  return (
    <div className="filter">
      <h3 className="filter__title">{`Filter by ${filterName}:`}</h3>
      <select
        name="sortByType"
        id="select"
        className="filter__select"
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
      >
        <option className="filter__option" value={""}>
          None
        </option>

        {data.map((element, idx) => (
          <option key={element + idx} className="filter__option">
            {element}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
