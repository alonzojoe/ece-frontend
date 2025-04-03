import { useEffect, useState } from "react";
import useToggle from "@/hooks/useToggle";
import { Outlet } from "react-router-dom";
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
          <Sidebar
            toggleSidebar={toggleSidebar}
            isToggled={sideBar}
          />
          {/* / Sidebar */}
          <div className="layout-page">
            {/* Navbar */}
            <Navbar
              toggleSidebar={toggleSidebar}
              sideBar={sideBar}
            />
            {/* Navbar */}
            {/* Content wrapper */}
            <div className="content-wrapper mt-5">
              <div className="flex-grow-1 mt-3 container-p-y container-fluid my-0 mb-5">
                <Outlet />
              </div>
              {/* Footer 
              
         Footer */}
              <Footer menus={MENUS} selectedId={selectedId} />
              <div className="content-backdrop fade"></div>
            </div>
            {/* Content wrapper */}
          </div>
        </div>

        <div
          className="layout-overlay layout-menu-toggle"
          onClick={() => toggleSidebar()}
        ></div>
        <div className="drag-target"></div>
      </div>
    </>
  );
};

export default RootLayout;
