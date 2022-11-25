import { getPaginationItems } from "../../features/expansionsFuncs";

const Pagination = ({
  nextPage,
  prevPage,
  currentPage,
  maxPage,
  setCurrentPage,
  classForCard,
}) => {
  const pagClassName = classForCard
    ? `pagination ${classForCard}`
    : "pagination";

  const pageHandler = (e, num) => {
    const elem = e.target.innerText;
    if (elem !== "...") {
      setCurrentPage(num);
    }
  };

  return (
    <div className={pagClassName}>
      <button className="pagination__page-btn" onClick={prevPage}>
        <i className="pagination__btn-icon pagination__arrowBack"></i>
      </button>
      <ul className="pagination__pages">
        {getPaginationItems(currentPage, maxPage, 7).map((pageNum, idx) => (
          <li
            className={
              pageNum == currentPage
                ? "pagination__page pagination__page_active"
                : "pagination__page"
            }
            key={idx}
            onClick={(e) => pageHandler(e, pageNum)}
          >
            {!isNaN(pageNum) ? pageNum : "..."}
          </li>
        ))}
      </ul>
      <button className="pagination__page-btn" onClick={nextPage}>
        <i className=" pagination__btn-icon pagination__arrowNext"></i>
      </button>
    </div>
  );
};

export default Pagination;
