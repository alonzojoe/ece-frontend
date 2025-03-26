const Pagination = () => {
  return (
    <div className="w-100">
      <div
        className="m-0 p-3 d-flex justify-content-between align-items-center"
        id="card-body"
      >
        <div>Total Records: 50</div>
        <div>
          Page <span>1 of 5</span>
        </div>

        <nav>
          <ul className="pagination">
            <li className="page-item disabled">
              <a
                href="#"
                className="page-link btn waves-effect waves-light btn-outline-primary rounded"
                style={{ borderRadius: "0px" }}
              >
                <span className="fa fa-angle-double-left"></span>
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
            <li className="page-item">
              <a
                href="#"
                className="page-link btn waves-effect waves-light btn-outline-primary rounded"
                style={{ borderRadius: "0px" }}
              >
                <span className="fa fa-angle-double-right"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
