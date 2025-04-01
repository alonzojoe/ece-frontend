import { useState } from "react";
import Card from "@/components/UI/Card";
import useFetch from "@/hooks/useFetch";

const initialForm = {
  name: "",
  email: "",
  gender: "",
  phone: "",
  position_id: "",
  status: 1,
};

const SearchUser = ({ onSearch, onRefresh }) => {
  const [form, setForm] = useState(initialForm);
  const { data: positions } = useFetch("/position/all", {});
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

  const choices = positions?.data ?? [];
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
              <select
                name="gender"
                className="form-select form-control-sm custom-font"
                value={form.gender}
                onChange={updateParams}
              >
                <option value={``}>Please Select</option>
                <option value={`Male`}>Male</option>
                <option value={`Female`}>Female</option>
              </select>
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
                name="position_id"
                className="form-select form-control-sm custom-font"
                value={form.position_id}
                onChange={updateParams}
              >
                <option value={``}>Please Select</option>
                {choices.map((c) => (
                  <option value={c.id} key={c.id}>
                    {c.name}
                  </option>
                ))}
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
              <button className="btn btn-primary" type="submit">
                Search
              </button>
              <button
                className="btn btn-danger"
                // onClick={() => {
                //   notif.custom(`data has been inserted`);
                // }}
                onClick={handleRefresh}
                type="button"
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
