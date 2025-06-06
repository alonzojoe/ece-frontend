import toast from "react-hot-toast";
import Swal from "sweetalert2";
import moment from "moment";
import api from "@/services/api";
export class Notification {
  normal(message, position = "top-center") {
    toast.custom(
      <div
        className="d-flex gap-2"
        style={{
          border: "1px solid #1AA14D",
          background: "#E4F0E9",
          color: "#1AA14D",
          padding: "10px 10px 10px 10px",
          borderRadius: "5px",
        }}
      >
        <div>
          <i className="ti ti-check" />
        </div>
        <div>
          <div className="fw-semibold">Alert Message</div>
          <span style={{ color: "#475365" }}>{message}</span>
        </div>
      </div>,
      {
        duration: 5000,
        position,
      }
    );
  }

  warning(message, position = "top-center") {
    toast.custom(
      <div
        className="d-flex gap-2"
        style={{
          border: "1px solid #CF941A",
          background: "#FEFCE9",
          color: "#CF941A",
          padding: "10px 10px 10px 10px",
          borderRadius: "5px",
        }}
      >
        <div>
          <i className="ti ti-alert-triangle" />
        </div>
        <div>
          <div className="fw-semibold">Warning Message</div>
          <span style={{ color: "#475365" }}>{message}</span>
        </div>
      </div>,
      {
        duration: 5000,
        position,
      }
    );
  }

  critical(message, position = "top-center") {
    toast.custom(
      <div
        className="d-flex gap-2"
        style={{
          border: "1px solid #DD2F2F",
          background: "#FEF3F3",
          color: "#DD2F2F",
          padding: "10px 10px 10px 10px",
          borderRadius: "5px",
        }}
      >
        <div>
          <i className="ti ti-exclamation-circle" />
        </div>
        <div>
          <div className="fw-semibold">Critical Message</div>
          <span style={{ color: "#475365" }}>{message}</span>
        </div>
      </div>,
      {
        duration: 5000,
        position,
      }
    );
  }

  custom(message, position = "top-center") {
    this.normal(message);
    this.warning(message);
    this.critical(message);
  }
}

export class ToastMessage {
  notif(icon, title) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon,
      title,
    });
  }
}

export class ConfirmDialog {
  confirm(icon, title, text) {
    return Swal.fire({
      icon,
      title,
      text,
      showCancelButton: true,
      confirmButtonText: "Yes",
    });
  }
}

export const formatDateTime = (cdate) => {
  return moment(cdate).format("lll");
};

export const setLocalStorage = (key, value) => {
  const stringifiedVal = JSON.stringify(value);
  localStorage.setItem(key, stringifiedVal);
};

export const getLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  return JSON.parse(storedValue) ?? undefined;
};

export const logout = () => {
  api.post("/auth/logout");
  localStorage.removeItem("auth-token");
  localStorage.removeItem("auth-user");
  window.location.href = "/";
};

export const handlePhoneInput = (event) => {
  const { value } = event.target;
  event.target.value = value.replace(/\D/g, "").slice(0, 10);
};
