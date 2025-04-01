import List from "./components/List";
import Swal from "sweetalert2";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import api from "@/services/api";

const Settings = () => {
  const [params, setParams] = useState({
    page: 1,
    random: 1,
  });

  const { data: positions, loading, error } = useFetch("/position", params);

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
            trimmed,
          });
        } catch (error) {
          console.log("error", error?.response?.data?.error || error.message);
          Swal.showValidationMessage(`Request failed: ${error.message}`);
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: `Information`,
          text: "Position saved successfully!",
        }).then(() => {
          setParams((prev) => ({ ...prev, random: Date.now() }));
        });
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
        Swal.fire({
          icon: "success",
          title: `Information`,
          text: "Position updated successfully!",
        }).then(() => {
          setParams((prev) => ({ ...prev, random: Date.now() })); // Refresh or trigger state update
        });
      }
    });
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
        <p className="mb-4">A role based list of positions.</p>
      </div>
      <div className="row my-2 mb-5 mx-3">
        <List
          isLoading={loading}
          positions={positions}
          onUpdate={updatePosition}
        />
      </div>
    </div>
  );
};

export default Settings;
