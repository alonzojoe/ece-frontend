import useToggle from "@/hooks/useToggle";
import useFetch from "@/hooks/useFetch";
import api from "@/services/api";
import React, { useState, useMemo, useEffect } from "react";
import echo from "@/services/sockets";
import { ConfirmDialog, ToastMessage } from "@/libs/utils";

const initialParams = {
  showAll: false,
  random: 0,
  page: 1,
};

const dialog = new ConfirmDialog();
const notify = new ToastMessage();
const Notifications = () => {
  const [showNotif, toggleShowNotif] = useToggle(false);
  const [params, setParams] = useState(initialParams);
  const [isPending, setIsPending] = useState(false);

  const {
    data: notifications,
    loading,
    error,
  } = useFetch("/notif/all", params);

  useEffect(() => {
    const channel = echo.channel("sensor-data");

    channel.listen(".sensor.stored", (event) => {
      console.log("notif", event.sensorData);

      setParams((prev) => ({
        ...prev,
        random: Date.now(),
      }));
    });

    return () => {
      channel.stopListening(".sensor.stored");
      echo.leaveChannel("sensor-data");
    };
  }, []);

  const toggleNotif = async () => {
    try {
      const res = await api.patch(`/notif/seen`);
      setParams((prev) => ({ ...prev, random: Date.now() }));
    } catch (error) {
      console.log(error);
    }
    toggleShowNotif();
  };

  const refresh = () => {
    setParams({ ...initialParams, random: Date.now() });
  };

  const deleteNotif = async (id) => {
    setIsPending(true);
    try {
      await api.patch(`/notif/update/${id}`);
      refresh();
    } catch (error) {
      notify.notif("error", "Something went wrong.");
    } finally {
      setIsPending(false);
    }
  };

  const clearNotif = () => {
    dialog
      .confirm(
        "question",
        "Confirmation",
        "Are you sure you want to clear all notifications?"
      )
      .then(async (result) => {
        if (result.isConfirmed) {
          setIsPending(true);
          try {
            await api.patch(`/notif/clear`);
            notify.notif("success", "Notifications cleard.");
            refresh();
          } catch (error) {
            console.log(error);
            notify.notif("error", "Something went wrong.");
          } finally {
            setIsPending(false);
          }
        }
      });
  };

  const unseen =
    useMemo(() => {
      return notifications?.data?.filter(
        (notification) => notification.status === 1
      ).length;
    }, [notifications?.data]) ?? 0;

  return (
    <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
      <span
        className="nav-link dropdown-toggle hide-arrow show"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="true"
        style={{ cursor: "pointer" }}
        onClick={toggleNotif}
      >
        <i className="ti ti-bell-filled ti-md"></i>
        <span className="badge bg-danger rounded-pill badge-notifications">
          {unseen}
        </span>
      </span>
      {showNotif && (
        <ul
          className="dropdown-menu dropdown-menu-end py-0 show"
          data-bs-popper="static"
        >
          <li className="dropdown-menu-header border-bottom">
            <div className="dropdown-header d-flex align-items-center py-3">
              <h5 className="text-body mb-0 me-auto">Notification</h5>
              <span
                className="dropdown-notifications-all text-body"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                aria-label="Mark all as read"
                data-bs-original-title="Mark all as read"
              >
                <i className="ti ti-mail-opened fs-4"></i>
              </span>
            </div>
          </li>
          <li className="notif-container dropdown-notifications-list scrollable-container ps">
            <ul className="list-group list-group-flush">
              {(loading || isPending) && (
                <li>
                  <div className="d-flex align-items-center justify-content-center mt-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </li>
              )}
              {error && (
                <li>
                  <div className="d-flex align-items-center justify-content-center mt-5">
                    <div className="">
                      <span className="text-danger">Something went wrong.</span>
                    </div>
                  </div>
                </li>
              )}
              {!loading && !error && !notifications?.data.length && (
                <li>
                  <div className="d-flex align-items-center justify-content-center mt-5">
                    <div className="">
                      <span className="text-dark">
                        No notifications available.
                      </span>
                    </div>
                  </div>
                </li>
              )}
              {!isPending &&
                !loading &&
                !error &&
                notifications?.data?.length > 0 &&
                notifications.data.map((notif) => (
                  <NotifItem
                    notif={notif}
                    key={notif.id}
                    onDelete={deleteNotif}
                  />
                ))}
            </ul>
          </li>
          {notifications?.data?.length > 0 && (
            <li className="dropdown-menu-footer border-top">
              <span
                className="dropdown-item text-danger cursor-pointer d-flex justify-content-center p-2 h-px-40 mb-1 align-items-center"
                onClick={() => clearNotif()}
              >
                Clear notifications
              </span>
            </li>
          )}
        </ul>
      )}
    </li>
  );
};

export default React.memo(Notifications);

const NotifItem = React.memo(({ notif, onDelete }) => {
  const stateMapping = {
    normal: { label: "bg-label-success", icon: "ti ti-check", title: "Alert" },
    warning: {
      label: "bg-label-warning",
      icon: "ti ti-alert-triangle",
      title: "Warning",
    },
    critical: {
      label: "bg-label-danger",
      icon: "ti ti-exclamation-circle",
      title: "Critical",
    },
  };

  const { label, icon, title } = stateMapping[notif.state] || {};

  return (
    <li
      className="list-group-item list-group-item-action dropdown-notifications-item"
      key={notif.id}
    >
      <div className="d-flex">
        <div className="flex-shrink-0 me-3">
          <div className="avatar">
            <span className={`avatar-initial rounded-circle ${label}`}>
              <i className={icon} />
            </span>
          </div>
        </div>
        <div className="flex-grow-1">
          <h6 className="mb-1">{title} Message</h6>
          {notif?.sensor_data && (
            <div className="mb-0 d-flex gap-1 flex-wrap">
              <small className="fw-semibold">
                Load: {notif.sensor_data.load}
              </small>
              <small className="fw-semibold">
                Deflection: {notif.sensor_data.deflection}
              </small>
              <small className="fw-semibold">
                Angle of Deflection: {notif.sensor_data.angle_of_deflection}
              </small>
            </div>
          )}
        </div>
        <div className="flex-shrink-0 dropdown-notifications-actions">
          <span className="dropdown-notifications-read">
            {notif.status === 1 && <span className="badge badge-dot"></span>}
          </span>
          <span
            className="dropdown-notifications-archive cursor-pointer"
            onClick={() => onDelete(notif.id)}
          >
            <span className="ti ti-x"></span>
          </span>
        </div>
      </div>
    </li>
  );
});
