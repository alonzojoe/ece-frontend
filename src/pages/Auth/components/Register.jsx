import { useId } from "react";
import { registrySchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Register = ({ onToggle }) => {
  const elId = useId();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(registrySchema) });

  const handleSignUp = async (formData) => {
    console.log("registry", formData);
  };

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
          />
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            {errors.email?.message}
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
          />
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>
        <button className="btn btn-primary d-grid w-100 waves-effect waves-light">
          Sign up
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
