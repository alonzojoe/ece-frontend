import useToggle from "@/hooks/useToggle";

const NOTIFICATIONS = [
  {
    id: 1,
    sensor_data_id: 35,
    state: "normal",
    status: 1,
  },
  {
    id: 2,
    sensor_data_id: 34,
    state: "warning",
    status: 0,
  },
  {
    id: 3,
    sensor_data_id: 34,
    state: "critical",
    status: 0,
  },
];

const Notifications = () => {
  const [showNotif, toggleShowNotif] = useToggle(false);

  const toggleNotif = () => {
    toggleShowNotif();
  };

  return (
    <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
      <span
        className="nav-link dropdown-toggle hide-arrow show"
        href="javascript:void(0);"
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="true"
        style={{ cursor: "pointer" }}
        onClick={toggleNotif}
      >
        <i className="ti ti-bell-filled ti-md"></i>
        <span className="badge bg-danger rounded-pill badge-notifications">
          {NOTIFICATIONS.length}
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
                href="javascript:void(0)"
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
              {NOTIFICATIONS.map((notif) => (
                <NotifItem notif={notif} key={notif.id} />
              ))}
            </ul>
          </li>
          <li className="dropdown-menu-footer border-top">
            <a
              href="javascript:void(0);"
              className="dropdown-item d-flex justify-content-center text-primary p-2 h-px-40 mb-1 align-items-center"
            >
              View all notifications
            </a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Notifications;

const NotifItem = ({ notif }) => {
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
          <p className="mb-0">Notification Content</p>
        </div>
        <div className="flex-shrink-0 dropdown-notifications-actions">
          <a href="javascript:void(0)" className="dropdown-notifications-read">
            {notif.status === 1 && <span className="badge badge-dot"></span>}
          </a>
          <a
            href="javascript:void(0)"
            className="dropdown-notifications-archive"
          >
            <span className="ti ti-x"></span>
          </a>
        </div>
      </div>
    </li>
  );
};
