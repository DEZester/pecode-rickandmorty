const Filter = ({ data, filterName, changeHandler }) => {
  return (
    <div className="locations__filter">
      <h3 className="locations__filter-title">{`Filter by ${filterName}:`}</h3>
      <select
        name="sortByType"
        id="select"
        className="locations__filter-select"
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
      >
        <option className="locations__filter-option" value={""}>
          None
        </option>

        {data.map((element, idx) => (
          <option key={element + idx} className="locations__filter-option">
            {element}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
