import List from "./components/List";
import Swal from "sweetalert2";
import useFetch from "@/hooks/useFetch";
import { useState, useRef } from "react";
import api from "@/services/api";
import Pagination from "@/components/UI/Pagination";
import { ToastMessage } from "@/libs/utils";

const toast = new ToastMessage();

const Settings = () => {
  const [params, setParams] = useState({
    name: "",
    page: 1,
    random: 1,
  });

  const { data: positions, loading, error } = useFetch("/position", params);
  const searchRef = useRef(null);
  const addNew = () => {
    Swal.fire({
      title: "Position Name",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Save",
      showLoaderOnConfirm: true,
      preConfirm: async (name) => {
        try {
          const trimmed = name.trim();
          if (!trimmed) {
            throw new Error("Field name is required!");
          }
          const res = await api.post("/position/store", {
            name: trimmed,
          });
        } catch (error) {
          console.log("error", error?.response?.data?.error || error.message);
          Swal.showValidationMessage(`Request failed: ${error.message}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        toast.notif("success", "Position added successfully!");
        setParams((prev) => ({ ...prev, page: 1, random: Date.now() }));
      }
    });
  };

  const updatePosition = (selected) => {
    const { id, name } = selected;
    Swal.fire({
      title: "Update Position",
      input: "text",
      inputValue: name,
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Update",
      showLoaderOnConfirm: true,
      preConfirm: async (updatedName) => {
        try {
          const trimmed = updatedName.trim();
          if (!trimmed) {
            throw new Error("Field name is required!");
          }
          const res = await api.put(`/position/update/${id}`, {
            name: trimmed,
          });
        } catch (error) {
          console.log("error", error?.response?.data?.error || error.message);
          Swal.showValidationMessage(`Request failed: ${error.message}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        toast.notif("success", "Position updated successfully!");
        setParams((prev) => ({ ...prev, random: Date.now() }));
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "question",
      title: "Are you sure to delete this position?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        try {
          await api.patch(`/position/delete/${id}`);
        } catch (error) {
          console.log("error", error?.response?.data?.error || error.message);
          Swal.showValidationMessage(`Request failed: ${error.message}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        toast.notif("success", "Position deleted successfully!");
        setParams((prev) => ({ ...prev, random: Date.now() }));
      }
    });
  };

  const handlePageChange = (page) => {
    setParams((prev) => ({ ...prev, page: page }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchRef.current.value.trim() === "") return;
    setParams((prev) => ({
      ...prev,
      page: 1,
      name: searchRef.current.value,
    }));
  };

  const refresh = () => {
    searchRef.current.value = "";
    setParams((prev) => ({ ...prev, page: 1, name: searchRef.current.value }));
  };

  return (
    <div className="card mt-3">
      <div className="mx-4">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="my-4">List of Positions</h4>
          <button className="btn btn-primary" onClick={addNew}>
            <i className="ti ti-plus"></i> Add New
          </button>
        </div>
      </div>
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
                name="building_name"
                className="form-control form-control-sm custom-font"
              />
              <div className="d-flex gap-2 flex-shrink-0">
                <button className="btn btn-primary flex-shrink-0" type="submit">
                  <i className="ti ti-search"></i>
                </button>
                <button
                  className="btn btn-danger flex-shrink-0"
                  type="button"
                  onClick={refresh}
                >
                  <i className="ti ti-refresh"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="row my-2 mb-5 mx-3">
        <List
          isLoading={loading}
          positions={positions}
          onUpdate={updatePosition}
          onDelete={handleDelete}
        />
        {!loading && positions?.data?.length > 0 && (
          <Pagination
            currentPage={params.page}
            totalPages={positions.total_pages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Settings;
