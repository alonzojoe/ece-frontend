import defaultImage from "../../assets/images/avatar.jpeg";

const ProfileSection = () => {
  return (
    <li className="nav-item navbar-dropdown dropdown-user dropdown">
      <a
        className="nav-link dropdown-toggle hide-arrow"
        href="javascript:void(0);"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="avatar avatar-online">
          <img
            src={defaultImage}
            alt="user-avatar"
            className="h-auto rounded-circle border border-secondary"
          />
        </div>
      </a>
      <ul className="dropdown-menu dropdown-menu-end">
        <li>
          <a
            className="dropdown-item"
            href="pages-account-settings-account.html"
          >
            <div className="d-flex">
              <div className="flex-shrink-0 me-3">
                <div className="avatar avatar-online">
                  <img
                    src={defaultImage}
                    alt="user-avatar"
                    className="h-auto rounded-circle border border-secondary"
                  />
                </div>
              </div>
              <div className="flex-grow-1">
                <span className="fw-medium d-block">Administrator</span>
                <small className="text-muted">Admin</small>
              </div>
            </div>
          </a>
        </li>
        <li>
          <div className="dropdown-divider"></div>
        </li>
        <li>
          <a className="dropdown-item" href="pages-profile-user.html">
            <i className="ti ti-user-check me-2 ti-sm"></i>
            <span className="align-middle">My Profile</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <i className="ti ti-settings me-2 ti-sm"></i>
            <span className="align-middle">Settings</span>
          </a>
        </li>

        <li>
          <div className="dropdown-divider"></div>
        </li>

        <li>
          <a className="dropdown-item" href="#" target="_blank">
            <i className="ti ti-logout me-2 ti-sm"></i>
            <span className="align-middle">Log Out</span>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default ProfileSection;
