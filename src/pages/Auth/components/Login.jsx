import { authSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from "@/services/api";
import { setLocalStorage, ToastMessage } from "@/libs/utils";
import { useNavigate } from "react-router-dom";
import AppLogo from "@/assets/images/app-logo.png";

const notify = new ToastMessage();

const Login = ({ onToggle }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(authSchema) });

  const handleSignIn = async (formData) => {
    console.log("login data", formData);
    const { email, password } = formData;
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      const { token } = res.data.authorization;
      const { user } = res.data;
      setLocalStorage("auth-token", token);
      setLocalStorage("auth-user", user);
      navigate("/home");
    } catch (error) {
      console.log(error?.message);
      notify.notif("error", "Invalid email or password");
    } finally {
      reset();
    }
  };

  return (
    <>
      <div className="app-brand mb-3">
        <span className="cursor-pointer app-brand-link gap-2">
          <span>
            <img src={AppLogo} height={50} width={50} alt="Logo" />
          </span>
        </span>
      </div>
      <h3 className="mb-3 fw-bold">Welcome to Beam Sensor 109!</h3>
      <p className="mb-2">Please sign-in to your account.</p>

      <form
        className="mb-3 fv-plugins-bootstrap5 fv-plugins-framework"
        onSubmit={handleSubmit((data) => handleSignIn(data))}
      >
        <div
          className={`mb-3 fv-plugins-icon-container ${
            errors.email ? "group-invalid" : ""
          }`}
        >
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            className={`form-control`}
            id="email"
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
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            className={`form-control`}
            id="password"
          />
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
            {errors.password?.message}
          </div>
        </div>
        <div className="mb-4">
          {/* <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember-me"
            />
            <label className="form-check-label" htmlFor="remember-me">
              {" "}
              Remember Me{" "}
            </label>
          </div> */}
        </div>
        <button
          type="submit"
          className="btn btn-primary d-grid w-100 waves-effect waves-light"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing in..." : `Sign in`}
        </button>
        <input type="hidden" />
      </form>

      <div className="text-center">
        <span>New on our platform?</span>{" "}
        <div className="cursor-pointer text-primary" onClick={() => onToggle()}>
          <span>Create an account</span>
        </div>
      </div>

      <div className="divider my-4"></div>
    </>
  );
};

export default Login;
