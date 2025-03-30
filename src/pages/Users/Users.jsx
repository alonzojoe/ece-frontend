import React from "react";
import Swal from "sweetalert2";
const users = [
  {
    id: 1,
    name: "ADMINISTRATOR",
    email: "admin@gmail.com",
    gender: "Male",
    phone: "09051234567",
    position: "Admin",
  },
  {
    id: 2,
    name: "JUAN DELA CRUZ",
    email: "juandelacruz@gmail.com",
    gender: "Male",
    phone: "09051234567",
    position: "Engineer",
  },
];

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

const Users = () => {
  return (
    <div className="card mt-3">
      <div className="table-responsive mt-3">
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-dark fw-bold bg-primary">
              <th className="text-center text-white p-1 m-0">ID</th>
              <th className="text-center text-white p-1 m-0">Name</th>
              <th className="text-center text-white p-1 m-0">Email</th>
              <th className="text-center text-white p-1 m-0">Gender</th>
              <th className="text-center text-white p-1 m-0">Phone</th>
              <th className="text-center text-white p-1 m-0">Position</th>
              <th className="text-center text-white p-1 m-0">Option</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  {u.id}
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  {u.name}
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  {u.email}
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  {u.gender}
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  {u.phone}
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  {u.position}
                </td>
                <td className="text-center align-middle fw-normal p-1 m-0">
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <button className="btn btn-primary btn-sm">Update</button>
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
      </div>
    </div>
  );
};

export default Users;
