const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = 5;
  const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-100">
      <div
        className="pagination-container m-0 p-3 d-flex justify-content-between align-items-center"
        id="card-body"
      >
        <div>Total Pages: {totalPages}</div>
        <div>
          Page{" "}
          <span>
            {currentPage} of {totalPages}
          </span>
        </div>
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link btn waves-effect waves-light btn-outline-primary rounded"
                style={{ borderRadius: "0px" }}
                onClick={() => onPageChange(1)}
              >
                <span className="fa fa-angle-double-left"></span>
              </button>
            </li>

            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => onPageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {pageNumbers.map((page) => (
              <li
                className={`page-item ${page === currentPage ? "active" : ""}`}
                key={page}
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => onPageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link btn waves-effect waves-light btn-outline-primary rounded"
                style={{ borderRadius: "0px" }}
                onClick={() => onPageChange(totalPages)}
              >
                <span className="fa fa-angle-double-right"></span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
