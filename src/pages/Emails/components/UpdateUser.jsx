import { useState } from "react";
import Modal from "@/components/UI/Modal";

import { useId } from "react";
import { updateSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToastMessage } from "@/libs/utils";
import api from "@/services/api";

const notify = new ToastMessage();

const UpdateUser = ({ positions, onClose, onRefresh, selectedUser }) => {
  const elId = useId();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
    reset,
  } = useForm({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      name: selectedUser.name,
      email: selectedUser.email,
      phone: selectedUser.phone,
      gender: selectedUser.gender,
      position_id: selectedUser.position_id.toString(),
    },
  });

  const handleUpdate = async (formData) => {
    console.log("registry", formData);
    await updateUser(formData);
  };

  const updateUser = async (user) => {
    const { id } = selectedUser;
    console.log("user", user);
    try {
      await api.patch(`/auth/update/${id}`, {
        ...user,
      });

      notify.notif("success", "Account updated successfully");
      onClose();
      onRefresh();
    } catch (error) {
      console.log("post error", error);
      if (error?.response?.data?.errors?.email) {
        const msg = error?.response?.data?.errors?.email[0];
        notify.notif("error", `${msg}`);
      } else {
        notify.notif("error", `Something went wrong.`);
      }
    }
  };

  const choices = positions.data.filter((pos) => pos.id !== 1);
  if (!choices) return <p>Loading</p>;
  return (
    <Modal
      onClose={() => onClose(false)}
      details={{ title: "User Information" }}
    >
      <div className="py-3 px-5">
        <>
          <h3 className="mb-1 fw-bold">Update Account</h3>

          <form
            className="mb-3 fv-plugins-bootstrap5 fv-plugins-framework row"
            onSubmit={handleSubmit((data) => handleUpdate(data))}
          >
            <div
              className={`mb-2 fv-plugins-icon-container col-sm-12 col-md-12 col-lg-12 ${
                errors.name ? "group-invalid" : ""
              }`}
            >
              <label htmlFor={`${elId}-name`} className="form-label">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                className="form-control"
                id={`${elId}-name`}
                maxLength={255}
              />
              <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                {errors.name?.message}
              </div>
            </div>
            <div
              className={`mb-2 fv-plugins-icon-container col-sm-12 col-md-6 col-lg-6 ${
                errors.email ? "group-invalid" : ""
              }`}
            >
              <label htmlFor={`${elId}-email`} className="form-label">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                className="form-control"
                id={`${elId}-email`}
                maxLength={50}
                disabled={true}
              />
              <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                {errors.email?.message}
              </div>
            </div>
            <div
              className={`mb-2 fv-plugins-icon-container col-sm-12 col-md-6 col-lg-6 ${
                errors.phone ? "group-invalid" : ""
              }`}
            >
              <label htmlFor={`${elId}-phone`} className="form-label">
                Phone
              </label>
              <input
                {...register("phone")}
                type="text"
                className="form-control"
                id={`${elId}-phone`}
                maxLength={11}
              />
              <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                {errors.phone?.message}
              </div>
            </div>
            <div
              className={`mb-2 fv-plugins-icon-container col-sm-12 col-md-6 col-lg-6 ${
                errors.gender ? "group-invalid" : ""
              }`}
            >
              <label htmlFor={`${elId}-gender`} className="form-label">
                Gender
              </label>
              <select
                {...register("gender")}
                name="gender"
                className="form-select form-control-sm custom-font"
                id={`${elId}-gender`}
              >
                <option value="">Please Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                {errors.gender?.message}
              </div>
            </div>
            <div
              className={`mb-2 fv-plugins-icon-container col-sm-12 col-md-6 col-lg-6 ${
                errors.position_id ? "group-invalid" : ""
              }`}
            >
              <label htmlFor={`${elId}-position_id`} className="form-label">
                Position
              </label>
              <select
                {...register("position_id")}
                name="position_id"
                className="form-select form-control-sm custom-font"
              >
                <option value="">Please Select</option>
                {choices.map((c) => (
                  <option value={c.id.toString()} key={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                {errors.position_id?.message}
              </div>
            </div>
            <div className="col-12 mt-3">
              <button
                className="btn btn-primary d-grid w-100 waves-effect waves-light d-flex gap-2 align-items-center"
                disabled={isLoading}
              >
                <span>{isLoading ? "Updating" : "Update"}</span>
                {isLoading && (
                  <div className="spinner-border text-white" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </button>
            </div>

            <input type="hidden" />
          </form>
        </>
      </div>
    </Modal>
  );
};

export default UpdateUser;
