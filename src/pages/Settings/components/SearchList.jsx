import { useRef } from "react";

const SearchList = ({ onSearch, onRefresh }) => {
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchRef.current.value.trim() === "") return;
    onSearch(searchRef.current.value);
  };

  const handleRefresh = () => {
    searchRef.current.value = "";
    onRefresh();
  };

  return (
    <form className="mt-3" onSubmit={handleSearch}>
      <div className="row mx-3">
        <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
          <div className="d-flex align-items-center gap-3">
            <label className="form-label fs-4 mb-2 fw-semibold flex-shrink-0">
              Search
            </label>
            <input
              ref={searchRef}
              type="text"
              className="form-control form-control-sm custom-font"
            />
            <div className="d-flex gap-2 flex-shrink-0">
              <button className="btn btn-primary flex-shrink-0" type="submit">
                <i className="ti ti-search"></i>
              </button>
              <button
                className="btn btn-danger flex-shrink-0"
                type="button"
                onClick={handleRefresh}
              >
                <i className="ti ti-refresh"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchList;
