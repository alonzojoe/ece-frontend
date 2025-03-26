import { Link } from "react-router-dom";

export const MENUS = [
  {
    id: 1,
    name: "Sensor Data",
    path: "/sensors",
    icon: "ti ti-table-filled",
  },
  {
    id: 2,
    name: "Email Notification",
    path: "/notify",
    icon: "ti ti-mail-filled",
  },
  {
    id: 3,
    name: "User Management",
    path: "/notify",
    icon: "ti ti-user-filled",
  },
  {
    id: 4,
    name: "Settings",
    path: "/settings",
    icon: "ti ti-settings-filled",
  },
];

const Sidebar = ({ toggleSidebar, isToggled }) => {
  const selectedId = 1;

  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical bg-menu-theme x-sidebar"
      style={{
        touchAction: "none",
        userSelect: "none",
        WebkitUserDrag: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      }}
    >
      <div className="app-brand demo py-1 d-flex align-items-center">
        <div>
          <span className="app-brand-logo demo">
            {/* <img
              src="../../assets/logos/camarin-logo-white.png"
              className="img-fluid"
              height="60"
              width="60"
              alt="cdh-logo"
            /> */}
          </span>
          <span className="app-brand-text demo menu-text fw-bold mx-auto">
            Logo - LMS
          </span>
        </div>
        <a
          href="#"
          className="layout-menu-toggle menu-link text-large ms-auto mb-2"
        >
          <div className="demo-vertical-spacing btn-switch">
            <div className="has-error">
              <label className="switch">
                <input
                  type="checkbox"
                  className="switch-input switch-input"
                  onChange={() => toggleSidebar()}
                  checked={isToggled}
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
          <i className="ti ti-x d-block d-xl-none ti-sm align-middle btn-x"></i>
        </a>
      </div>
      <div className="menu-inner-shadow"></div>
      <ul className="menu-inner py-1">
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Home</span>
        </li>
        {MENUS.map((menu) => (
          <li className={`menu-item ${menu.id === selectedId ? 'active': ''}`} key={menu.id}>
            <Link to={`/home/${menu.path}`} className="menu-link">
              <i className={`menu-icon tf-icons ${menu.icon}`}></i>
              <div>{menu.name}</div>
            </Link>
          </li>
        ))}
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Auth</span>
        </li>
        <li className="menu-item">
          <a href="#" className="menu-link">
            <i className="menu-icon tf-icons ti ti-logout"></i>
            <div data-i18n="logout">Logout</div>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
