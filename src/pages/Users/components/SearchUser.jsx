import { useState } from "react";
import Card from "@/components/UI/Card";

const initialForm = {
  name: "",
  email: "",
  gender: "",
  phone: "",
  position: 1,
  status: 1,
};

const SearchUser = ({ onSearch, onRefresh }) => {
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
              <label className="form-label fs-6 mb-2 fw-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm custom-font"
                value={form.name}
                onChange={updateParams}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">Email</label>
              <input
                type="text"
                name="email"
                className="form-control form-control-sm custom-font"
                value={form.email}
                onChange={updateParams}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">Gender</label>
              <input
                type="text"
                name="gender"
                className="form-control form-control-sm custom-font"
                value={form.gender}
                onChange={updateParams}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-sm custom-font"
                value={form.phone}
                onChange={updateParams}
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Position
              </label>
              <select
                name="status"
                className="form-select form-control-sm custom-font"
                value={form.status}
                onChange={updateParams}
              >
                <option value="1">Admin</option>
                <option value="0">User</option>
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

export default SearchUser;
