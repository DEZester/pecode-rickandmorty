const Pagination = ({ next, prev, setApi }) => {
  return (
    <div className="pagination">
      <button className="pagination__btn" onClick={() => setApi(prev)}>
        Prev Page
      </button>
      <button className="pagination__btn" onClick={() => setApi(next)}>
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
