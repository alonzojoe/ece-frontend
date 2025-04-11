import { useCallback, useState } from "react";
import useFetch from "@/hooks/useFetch";
import SearchUser from "./components/SearchUser";
import Pagination from "@/components/UI/Pagination";
import { ToastMessage, ConfirmDialog } from "@/libs/utils";
import EmailData from "./components/EmailData";

const initialState = {
  name: "",
  email: "",
  gender: "",
  phone: "",
  position: null,
  page: 1,
  random: 0,
};
const notify = new ToastMessage();
const dialog = new ConfirmDialog();
const Emails = () => {
  const [params, setParams] = useState(initialState);
  const [showEmail, setShowEmail] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const { data: users, loading, error } = useFetch(`/auth`, params);

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

  const handleSelect = useCallback(
    (e) => {
      const { value, checked } = e.target;
      const selectedData = users?.data.find((u) => u.id == value);

      if (checked) {
        setSelectedItems([...selectedItems, selectedData]);
      } else {
        setSelectedItems(selectedItems.filter((item) => item.id != value));
      }
    },
    [users, selectedItems]
  );

  const sendEmail = async () => {
    if (selectedItems.length === 0)
      return notify.notif("error", "Please select email recipients");
    setShowEmail(true);
  };

  return (
    <>
      {showEmail && (
        <EmailData
          recipients={selectedItems}
          onClose={() => setShowEmail(false)}
          onClear={() => setSelectedItems([])}
        />
      )}

      <div className="card mt-3">
        <SearchUser onSearch={handleSearch} onRefresh={refresh} />
        <div className="d-flex justify-start my-3">
          <button
            className="btn btn-primary position-relative"
            onClick={() => sendEmail()}
          >
            <i className="ti ti-location-filled"></i> Send Email{"  "}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {selectedItems.length}
              <span className="visually-hidden">selected</span>
            </span>
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-hover bg-white">
            <thead>
              <tr className="text-dark fw-bold bg-primary">
                <th className="text-center text-white py-2 m-0">Select</th>
                <th className="text-center text-white py-2 m-0">Name</th>
                <th className="text-center text-white py-2 m-0">Email</th>
                <th className="text-center text-white py-2 m-0">Gender</th>
                <th className="text-center text-white py-2 m-0">Phone</th>
                <th className="text-center text-white py-2 m-0">Position</th>
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
                    colSpan="6"
                  >
                    Something went wrong :(
                  </td>
                </tr>
              )}
              {!loading && !error && !users?.data?.length && (
                <tr>
                  <td
                    className="text-center align-middle fw-normal p-1 m-0"
                    colSpan="6"
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
                      <input
                        onChange={handleSelect}
                        className="form-check-input"
                        type="checkbox"
                        checked={selectedItems.some((item) => item.id === u.id)}
                        value={u.id}
                      />
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
    </>
  );
};

export default Emails;
