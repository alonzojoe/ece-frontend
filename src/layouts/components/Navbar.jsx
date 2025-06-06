import ProfileSection from "@/layouts/components/ProfileSection";
import Notifications from "./Notifications";
import UserContext from "@/context/user-context";
import { useContext } from "react";
import NotifContext from "@/context/notification-context";

const Navbar = ({ toggleSidebar, isToggled }) => {
  const { user } = useContext(UserContext);
  const { showNotif, toggleNotif } = useContext(NotifContext);
  return (
    <nav
      className="navbar-main m-0 rounded-0 w-auto layout-navbar navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme container-fluid"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a
          className="nav-item nav-link px-0 me-xl-4"
          onClick={() => toggleSidebar()}
        >
          <i className="ti ti-menu-2 ti-sm"></i>
        </a>
        {/* <span>{JSON.stringify(showNotif)}</span> */}
      </div>
      <div className="demo-vertical-spacing-n btn-switch">
        <div className="has-error">
          <label className="switch">
            <input
              type="checkbox"
              className="switch-input switch-input"
              onChange={toggleNotif}
              checked={showNotif}
              // true-value={true}
              // false-value={false}
            />
            <span className="switch-toggle-slider">
              <span className="switch-on"></span>
              <span className="switch-off"></span>
            </span>
            <span className="switch-label"></span>
          </label>
        </div>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        <div className="navbar-nav align-items-center">
          <div className="nav-item navbar-search-wrapper mb-2">
            {/* <h4 className="mt-4 fw-bold">E-Portal</h4> */}
          </div>
        </div>
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item dropdown-language dropdown me-2 me-xl-0">
            <a className="nav-link hide-arrow" href="#">
              <i className="ti rounded-circle ti-md"></i>
            </a>
          </li>

          {/* notif */}
          <Notifications />
          {/* notif */}

          <li
            className="nav-item dropdown-language dropdown me-2 me-xl-0"
            id="user-name"
          >
            <span className="nav-link hide-arrow">
              <h5 className="mt-3 fw-bolder">{user?.name.toUpperCase()}</h5>
            </span>
          </li>

          {/* <li className="nav-item navbar-dropdown dropdown-user">
            <a className="nav-link hide-arrow" href="#">
              <div className="avatar avatar-online">
                <img
                  src={defaultImage}
                  alt="user-avatar"
                  className="h-auto rounded-circle"
                />
              </div>
            </a>
          </li> */}
          <ProfileSection />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
