import { useState } from "react";
import Card from "@/components/UI/Card";

const initialForm = {
  building_name: "",
  load: "",
  deflection: "",
  angle_of_deflection: "",
  status: 1,
};

const SearchData = ({ onSearch, onRefresh }) => {
  const [form, setForm] = useState(initialForm);

  const updateParams = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRefresh = () => {
    setForm(initialForm);
    onRefresh();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(form);
  };

  return (
    <Card title="Search">
      <form onSubmit={handleSearch}>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Building Name
              </label>
              <input
                type="text"
                name="building_name"
                className="form-control form-control-sm custom-font"
                value={form.building_name}
                onChange={updateParams}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">Load</label>
              <input
                type="text"
                name="load"
                className="form-control form-control-sm custom-font"
                value={form.load}
                onChange={updateParams}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Deflection
              </label>
              <input
                type="text"
                name="deflection"
                className="form-control form-control-sm custom-font"
                value={form.deflection}
                onChange={updateParams}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Angle of Deflection
              </label>
              <input
                type="text"
                name="angle_of_deflection"
                className="form-control form-control-sm custom-font"
                value={form.angle_of_deflection}
                onChange={updateParams}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">Status</label>
              <select
                name="status"
                className="form-select form-control-sm custom-font"
                value={form.status}
                onChange={updateParams}
              >
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div
              className="d-flex gap-2 align-items-center"
              style={{
                marginTop: "1.7rem",
              }}
            >
              <button className="btn btn-primary">Search</button>
              <button
                className="btn btn-danger"
                // onClick={() => {
                //   notif.custom(`data has been inserted`);
                // }}
                onClick={handleRefresh}
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default SearchData;
