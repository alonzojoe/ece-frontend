import { useEffect } from "react";
import useToggle from "@/hooks/useToggle";
import { Outlet, Link } from "react-router-dom";
import Navbar from "@/layouts/components/Navbar";
import Sidebar from "@/layouts/components/Sidebar";
import Footer from "@/layouts/components/Footer";
import { MENUS } from "@/constants";

const RootLayout = () => {
  const [sideBar, toggleSidebar] = useToggle(false);
  const selectedId = 3;
  useEffect(() => {
    console.log(`side bar triggered`);
    const htmlEl = document.documentElement;

    if (sideBar) {
      htmlEl.classList.add(
        "layout-navbar-fixed",
        "layout-compact",
        "layout-menu-fixed",
        "layout-menu-expanded"
      );
    } else {
      htmlEl.classList.remove(
        "layout-navbar-fixed",
        "layout-compact",
        "layout-menu-fixed",
        "layout-menu-expanded"
      );
    }
  }, [sideBar]);

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Sidebar */}
          <Sidebar toggleSidebar={toggleSidebar} isToggled={sideBar} />
          {/* / Sidebar */}
          <div className="layout-page">
            {/* Navbar */}
            <Navbar toggleSidebar={toggleSidebar} sideBar={sideBar} />
            {/* Navbar */}
            {/* Content wrapper */}
            <div className="content-wrapper">
              <div className="flex-grow-1 container-p-y container-fluid my-0">
                <Outlet />
              </div>
              {/* Footer 
         Footer */}
              <div className="content-backdrop fade"></div>
            </div>
            {/* Content wrapper */}
            <div className="nav-menu-x position-fixed w-100 bottom-0">
              <div className="nav-menu-x-child mx-2 rounded-4 px-5 py-3 d-flex justify-content-between align-items-center">
                {MENUS.map((menu) => (
                  <Link to={`/home${menu.path}`} key={menu.id}>
                    <span
                      className={`nav-x-container ${
                        menu.id === selectedId ? "active" : ""
                      }`}
                    >
                      <i className={`${menu.icon} fs-2`} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="layout-overlay layout-menu-toggle"
          onClick={() => toggleSidebar()}
        ></div>
        <div className="drag-target"></div>
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
