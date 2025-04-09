import MiniModal from "@/components/UI/MiniModal";
import { ToastMessage } from "@/libs/utils";
import { useState } from "react";
import api from "@/services/api";
import useOnline from "@/hooks/useOnline";
import moment from "moment";

const notify = new ToastMessage();

const initialPayload = {
  date_from: moment().format("YYYY-MM-DD"),
  date_to: moment().format("YYYY-MM-DD"),
};

console.log("init payload", initialPayload);

const EmailData = ({ recipients, onClose, onClear }) => {
  const [payload, setPayload] = useState(initialPayload);
  const [isPending, setIsPending] = useState(false);
  const isOnline = useOnline();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!isOnline) {
      notify.notif("error", "Please check your internet connection");
      return;
    }
    setIsPending(true);
    try {
      const res = await api.get("/sensor/all", {
        params: {
          date_from: moment(payload.date_from).format("YYYY-MM-DD"),
          date_to: moment(payload.date_to).format("YYYY-MM-DD"),
        },
      });

      const emailData = res.data.data ?? [];
      if (emailData.length === 0) {
        notify.notif("error", "No results were found.");
        return;
      }
      const emailRes = await sendEmail(emailData);
      console.log(emailRes);

      if (emailRes && emailRes.success) {
        notify.notif("success", "Email sent successfully.");
        onClear();
        onClose();
      } else {
        notify.notif(
          "error",
          "Failed to send email. Please check your internet connection."
        );
      }
    } catch (error) {
      notify.notif("error", "Something went wrong.");
    } finally {
      setIsPending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (data) => {
    console.log("recipients: ", recipients);
    console.log("email data:", data);
    try {
      const res = await api.post("/notif/send-email", {
        recipients,
        data,
      });

      return { success: true, data: res.data };
    } catch (e) {
      notify.notif("error", "Something went wrong.");
      return { success: false, message: e.message };
    }
  };

  return (
    <MiniModal onClose={onClose} details={{ title: "Email Details" }}>
      <div className="py-3 px-5">
        <>
          <h3 className="mb-1 fw-bold">Select Sensor Data</h3>

          <form
            className="mb-3 fv-plugins-bootstrap5 fv-plugins-framework row"
            onSubmit={handleSearch}
          >
            <div className={`mb-2 fv-plugins-icon-container col-12`}>
              <label htmlFor={`date-from`} className="form-label">
                Date From
              </label>
              <input
                type="date"
                name="date_from"
                className="form-control"
                value={payload.date_from}
                onChange={handleChange}
              />
            </div>
            <div className={`mb-2 fv-plugins-icon-container col-12`}>
              <label htmlFor={`date-from`} className="form-label">
                Date To
              </label>
              <input
                type="date"
                name="date_to"
                className="form-control"
                value={payload.date_to}
                onChange={handleChange}
              />
            </div>
            {/* <div
            className={`mb-2 fv-plugins-icon-container col-sm-12 col-md-6 col-lg-6`}
          >
            <label htmlFor={`date-from`} className="form-label">
              Position
            </label>
            <select
              name="date-from"
              className="form-select form-control-sm custom-font"
            >
              <option value="">Please Select</option>
            </select>
          </div> */}
            <div className="col-12 mt-3">
              <button
                className="btn btn-primary d-grid w-100 waves-effect waves-light d-flex gap-2 align-items-center"
                disabled={isPending}
              >
                <i className="ti ti-location-filled"></i>{" "}
                <span>{isPending ? "Sending..." : "Send"}</span>
                {isPending && (
                  <div className="spinner-border text-white" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )}
              </button>
            </div>
          </form>
        </>
      </div>
    </MiniModal>
  );
};

export default EmailData;
