import { useId } from "react";
import { registrySchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToastMessage, handlePhoneInput } from "@/libs/utils";
import { useState } from "react";
import api from "@/services/api";

const notify = new ToastMessage();

const Register = ({ onToggle, positions }) => {
  const [isLoading, setIsLoading] = useState(false);
  const elId = useId();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(registrySchema) });

  const handleSignUp = async (formData) => {
    console.log("registry", formData);
    await signUp(formData);
  };

  const signUp = async (user) => {
    console.log("user", user);
    setIsLoading(true);
    try {
      await api.post(`/auth/register`, {
        ...user,
      });

      notify.notif("success", "Account created successfully");
      onToggle();
    } catch (error) {
      if (error?.response?.data?.errors?.email) {
        const msg = error?.response?.data?.errors?.email[0];
        notify.notif("error", `${msg}`);
      } else {
        notify.notif("error", `Something went wrong.`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const choices = positions.data.filter((pos) => pos.id !== 1) ?? [];

  return (
    <>
      <h3 className="mb-1 fw-bold">Account Registration</h3>
      <p className="mb-4">Create your account</p>

      <form
        className="mb-3 fv-plugins-bootstrap5 fv-plugins-framework"
        onSubmit={handleSubmit((data) => handleSignUp(data))}
      >
        <div
          className={`mb-3 fv-plugins-icon-container ${
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
          className={`mb-3 fv-plugins-icon-container ${
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
          />
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            {errors.email?.message}
          </div>
        </div>
        <div
          className={`mb-3 fv-plugins-icon-container ${
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
            maxLength={10}
            onChange={handlePhoneInput}
          />
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            {errors.phone?.message}
          </div>
        </div>
        <div
          className={`mb-3 fv-plugins-icon-container ${
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
          className={`mb-3 fv-plugins-icon-container ${
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
              <option value={c.id} key={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            {errors.position_id?.message}
          </div>
        </div>

        <div
          className={`mb-3 fv-plugins-icon-container ${
            errors.password ? "group-invalid" : ""
          }`}
        >
          <label htmlFor={`${elId}-password`} className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className="form-control"
            id={`${elId}-password`}
            maxLength={50}
          />
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            {errors.password?.message}
          </div>
        </div>

        <div
          className={`mb-3 fv-plugins-icon-container ${
            errors.confirmPassword ? "group-invalid" : ""
          }`}
        >
          <label htmlFor={`${elId}-cpassword`} className="form-label">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            className="form-control"
            id={`${elId}-cpassword`}
            maxLength={50}
          />
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <button
          className="btn btn-primary d-grid w-100 waves-effect waves-light d-flex gap-2 align-items-center"
          disabled={isLoading}
        >
          <span>{isLoading ? "Signing up" : "Sign up"}</span>
          {isLoading && (
            <div className="spinner-border text-white" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </button>

        <input type="hidden" />
      </form>

      <div className="text-center">
        <span>Already have an account?</span>{" "}
        <div className="cursor-pointer text-primary" onClick={() => onToggle()}>
          <span>Click here to log in</span>
        </div>
      </div>

      <div className="divider my-4"></div>
    </>
  );
};

export default Register;
