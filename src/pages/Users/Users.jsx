import { useState } from "react";
import Swal from "sweetalert2";
import useFetch from "@/hooks/useFetch";
import SearchUser from "./components/SearchUser";
import Pagination from "@/components/UI/Pagination";
import useToggle from "@/hooks/useToggle";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
const initialState = {
  name: "",
  email: "",
  gender: "",
  phone: "",
  position: null,
  page: 1,
  random: 0,
};

const Users = () => {
  const [params, setParams] = useState(initialState);
  const { data: users, loading, error } = useFetch(`/auth`, params);
  const { data: positions } = useFetch("/position/all", {});
  const [showForm, toggleForm] = useToggle(false);
  const [updateForm, toggleUpdateForm] = useToggle(false);
  const [selected, setSelected] = useState();
  const handleDelete = (id) => {
    Swal.fire({
      icon: "question",
      title: "Are you sure to delete this user?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const handlePageChange = (page) => {
    setParams((prev) => ({
      ...prev,
      page,
    }));
  };

  const handleSearch = (form) => {
    console.log(form);
    const { name, email, phone, gender, position_id } = form;
    setParams((prev) => ({
      ...prev,
      page: 1,
      name: name,
      email: email,
      phone: phone,
      gender: gender,
      position_id: position_id,
      status: 1,
    }));
  };

  const refresh = () => {
    setParams({
      ...initialState,
      randomizer: Date.now(),
    });
  };

  const updateUser = (selected) => {
    setSelected(selected);
    toggleUpdateForm(true);
  };

  return (
    <div className="card mt-3">
      {showForm && (
        <AddUser
          positions={positions}
          onClose={toggleForm}
          onRefresh={refresh}
        />
      )}
      {updateForm && (
        <UpdateUser
          positions={positions}
          onClose={toggleUpdateForm}
          onRefresh={refresh}
          selectedUser={selected}
        />
      )}
      <SearchUser onSearch={handleSearch} onRefresh={refresh} />
      <div className="d-flex justify-content-end my-2">
        <button className="btn btn-primary" onClick={() => toggleForm(true)}>
          <i className="ti ti-plus"></i> Create New User
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-dark fw-bold bg-primary">
              <th className="text-center text-white py-2 m-0">ID</th>
              <th className="text-center text-white py-2 m-0">Name</th>
              <th className="text-center text-white py-2 m-0">Email</th>
              <th className="text-center text-white py-2 m-0">Gender</th>
              <th className="text-center text-white py-2 m-0">Phone</th>
              <th className="text-center text-white py-2 m-0">Position</th>
              <th className="text-center text-white py-2 m-0">Option</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td
                  className="text-center align-middle fw-normal p-1 m-0"
                  colSpan="7"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center jusitfy-content-center">
                      <div className="sk-wave sk-primary">
                        <div className="sk-wave-rect"></div>
                        <div className="sk-wave-rect"></div>
                        <div className="sk-wave-rect"></div>
                        <div className="sk-wave-rect"></div>
                        <div className="sk-wave-rect"></div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            )}
            {error && (
              <tr>
                <td
                  className="text-center align-middle text-danger fw-normal p-1 m-0"
                  colSpan="7"
                >
                  Something went wrong :(
                </td>
              </tr>
            )}
            {!loading && !error && !users?.data?.length && (
              <tr>
                <td
                  className="text-center align-middle fw-normal p-1 m-0"
                  colSpan="7"
                >
                  No records found.
                </td>
              </tr>
            )}
            {!loading &&
              !error &&
              users?.data?.length > 0 &&
              users.data.map((u) => (
                <tr key={u.id}>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    {u.id}
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    {u.name.toUpperCase()}
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    {u.email}
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    {u.gender.toUpperCase()}
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    {u.phone}
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    {u.position?.name.toUpperCase() ?? ""}
                  </td>
                  <td className="text-center align-middle fw-normal p-1 m-0">
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => updateUser(u)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(u.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!loading && users?.data?.length > 0 && (
          <Pagination
            currentPage={params.page}
            totalPages={users.total_pages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
