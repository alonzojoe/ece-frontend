import { Link } from "react-router-dom";
import { MENUS } from "../../constants";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import MainLogo from "@/assets/images/main-logo.png";
import { logout } from "@/libs/utils";

const Sidebar = ({ toggleSidebar, isToggled }) => {
  const { pathname } = useLocation();

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
        <Link to="/home" className="app-brand-link align-items-center">
          <span className="app-brand-logo demo">
            <img
              src={MainLogo}
              className="img-fluid"
              height="60"
              width="60"
              alt="cdh-logo"
            />
          </span>
          <span className="app-brand-text demo menu-text fw-bold mx-auto">
            BeamSensor109
          </span>
        </Link>
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
          <li
            className={`menu-item ${
              pathname === `/home${menu.path}` ? "active" : ""
            }`}
            key={menu.id}
          >
            <Link to={`/home${menu.path}`} className="menu-link">
              <i className={`menu-icon tf-icons ${menu.icon}`}></i>
              <div>{menu.name}</div>
            </Link>
          </li>
        ))}
        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Auth</span>
        </li>
        <li className="menu-item">
          <div className="menu-link cursor-pointer" onClick={logout}>
            <i className="menu-icon tf-icons ti ti-logout"></i>
            <div data-i18n="logout">Logout</div>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
