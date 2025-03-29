import React from "react";

const users = [
  {
    id: 1,
    name: "Administrator",
    email: "admin@gmail.com",
    gender: "Male",
    phone: "09051234567",
    position: "Admin",
  },
  {
    id: 1,
    name: "JUAN DELA CRUZ",
    email: "juandelacruz@gmail.com",
    gender: "Male",
    phone: "09051234567",
    position: "Emgineer",
  },
];

const Users = () => {
  return (
    <div className="card mt-3">
      <div className="table-responsive mt-3">
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-dark">
              <th className="text-center text-dark fw-normal p-1 m-0">ID</th>
              <th className="text-center text-dark fw-normal p-1 m-0">Name</th>
              <th className="text-center text-dark fw-normal p-1 m-0">Email</th>
              <th className="text-center text-dark fw-normal p-1 m-0">
                Gender
              </th>
              <th className="text-center text-dark fw-normal p-1 m-0">Phone</th>
              <th className="text-center text-dark fw-normal p-1 m-0">
                Position
              </th>
              <th className="text-center text-dark fw-normal p-1 m-0">
                Option
              </th>
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
                    <button className="btn btn-danger btn-sm">Delete</button>
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
