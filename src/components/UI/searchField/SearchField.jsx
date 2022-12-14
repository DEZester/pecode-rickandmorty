const SearchField = ({
  placeholderText,
  getData,
  setSearchValue,
  searchValue,
  url,
}) => {
  return (
    <div className="searchField">
      <svg
        className="searchField__inputLogo"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2_204)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.2466 11.8814C14.0537 10.711 14.5262 9.29226 14.5262 7.76311C14.5262 3.7518 11.2744 0.5 7.26311 0.5C3.2518 0.5 0 3.7518 0 7.76311C0 11.7744 3.2518 15.0262 7.26311 15.0262C8.79106 15.0262 10.2088 14.5544 11.3786 13.7485L16.1298 18.4997L17.9974 16.6322L13.2466 11.8814ZM10.7395 10.8172C11.4559 10.0023 11.8904 8.93344 11.8904 7.76311C11.8904 5.20752 9.81869 3.13581 7.26311 3.13581C4.70752 3.13581 2.63581 5.20752 2.63581 7.76311C2.63581 10.3187 4.70752 12.3904 7.26311 12.3904C8.43344 12.3904 9.5023 11.9559 10.3172 11.2395L10.7395 10.8172Z"
            fill="#485982"
          />
        </g>
        <defs>
          <clipPath id="clip0_2_204">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
      <input
        value={searchValue}
        type="text"
        className="searchField__input"
        placeholder={`Find your ${placeholderText}`}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button
        className="searchField__btn"
        onClick={() => getData(`${url}name=${searchValue}`)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
