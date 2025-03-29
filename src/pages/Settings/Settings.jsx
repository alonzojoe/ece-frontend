import React from "react";

const POSITIONS = [
  {
    id: 1,
    name: "Admin",
    total: 1,
  },
  {
    id: 2,
    name: "Architect",
    total: 5,
  },
  {
    id: 3,
    name: "Engineer",
    total: 3,
  },
  {
    id: 4,
    name: "Electrical",
    total: 6,
  },
  {
    id: 5,
    name: "Others",
    total: 10,
  },
];

const Settings = () => {
  return (
    <div className="card mt-3">
      <div className="mx-3">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-4">List of Positions</h4>
          <button className="btn btn-primary">
            <i className="ti ti-plus"></i> Add New
          </button>
        </div>
        <p className="mb-4">
          A role provided access to predefined menus and features so that
          depending on <br />
          assigned role an administrator can have access to what user needs.
        </p>
      </div>
      <div className="row my-2 mb-5 mx-3">
        {POSITIONS.map((p) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2" key={p.id}>
            <div className="card border border">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h6 className="fw-normal mb-2">Total users: {p.total}</h6>
                </div>
                <div className="d-flex justify-content-between align-items-end mt-1">
                  <div className="role-heading">
                    <h4 className="mb-1">{p.name}</h4>
                    <a
                      href="javascript:;"
                      data-bs-toggle="modal"
                      data-bs-target="#addRoleModal"
                      className="role-edit-modal"
                    >
                      <span>Edit Role</span>
                    </a>
                  </div>
                  {/* <a href="javascript:void(0);" className="text-muted">
                    <i className="ti ti-copy ti-md"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;
