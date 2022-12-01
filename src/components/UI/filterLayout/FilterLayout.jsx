const FilterLayout = ({ children, clearFilters, baseUrl }) => {
  return (
    <div className="filters">
      <h1 className="filters__title">Filters</h1>
      <div
        className="filters__clearFilter"
        onClick={() => clearFilters(baseUrl)}
      >
        Clear Filters
      </div>
      {children}
    </div>
  );
};

export default FilterLayout;
