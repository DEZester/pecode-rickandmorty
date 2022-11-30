const FilterLayout = ({ children, clearFilters, baseUrl }) => {
  return (
    <div className="filters">
      <h1 className="filters__title">Filter</h1>
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
