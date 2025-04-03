import MiniModal from "@/components/UI/MiniModal";
import { useId } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePassSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { ToastMessage } from "@/libs/utils";
import api from "@/services/api";

const notify = new ToastMessage();

const ChangePassword = ({ onClose, onRefresh, selectedUser }) => {
  const elId = useId();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting: isLoading },
    reset,
  } = useForm({
    resolver: zodResolver(changePassSchema),
    defaultValues: {
      email: selectedUser.email,
    },
  });

  const handleChangePass = async (formData) => {
    console.log("update pass", formData);
    await updatePassword(formData);
  };

  const updatePassword = async (user) => {
    console.log("user", user);
    try {
      await api.post(`/auth/change-password`, {
        ...user,
      });

      notify.notif("success", "Password change successfully");
      onClose();
      onRefresh();
    } catch (error) {
      console.log("errr", error?.response?.data?.message);
      if (error?.response?.data?.message) {
        const msg = error?.response?.data?.message;
        notify.notif("error", `${msg}`);
      } else {
        notify.notif("error", `Something went wrong.`);
      }
    }
  };

  return (
    <MiniModal onClose={() => onClose(false)} details={{ title: "Settings" }}>
      <div className="py-3 px-5">
        <>
          <h3 className="mb-1 fw-bold">Change Password</h3>

          <form
            className="mb-3 fv-plugins-bootstrap5 fv-plugins-framework row"
            onSubmit={handleSubmit((data) => handleChangePass(data))}
          >
            <div
              className={`mb-2 fv-plugins-icon-container col-sm-12 col-md-12 col-lg-12 ${
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
              className={`mb-3 fv-plugins-icon-container col-sm-12 col-md-12 col-lg-12 ${
                errors.oldpassword ? "group-invalid" : ""
              }`}
            >
              <label htmlFor={`${elId}-oldpassword`} className="form-label">
                Old Password
              </label>
              <input
                {...register("oldpassword")}
                type="password"
                className="form-control"
                id={`${elId}-oldpassword`}
                maxLength={50}
              />
              <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                {errors.oldpassword?.message}
              </div>
            </div>

            <div
              className={`mb-3 fv-plugins-icon-container col-sm-12 col-md-12 col-lg-12 ${
                errors.newpassword ? "group-invalid" : ""
              }`}
            >
              <label htmlFor={`${elId}-newpassword`} className="form-label">
                New Password
              </label>
              <input
                {...register("newpassword")}
                type="password"
                className="form-control"
                id={`${elId}-newpassword`}
                maxLength={50}
              />
              <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback">
                {errors.newpassword?.message}
              </div>
            </div>

            <div
              className={`mb-3 fv-plugins-icon-container ${
                errors.confirmPassword ? "group-invalid" : ""
              }`}
            >
              <label htmlFor={`${elId}-cpassword`} className="form-label">
                Confirm New Password
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
    </MiniModal>
  );
};

export default ChangePassword;
