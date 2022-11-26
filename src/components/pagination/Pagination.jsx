const Pagination = ({ next, prev, setApi }) => {
  return (
    <div className="pagination">
      <button className="btn" onClick={() => setApi(prev)} disabled={!prev}>
        Prev Page
      </button>
      <button className="btn" onClick={() => setApi(next)} disabled={!next}>
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
