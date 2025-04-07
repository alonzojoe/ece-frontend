import { createPortal } from "react-dom";

const PageLoader = () => {
  return createPortal(
    <div className="page-loader">
      <div
        className="sk-circle-fade sk-primary"
        style={{ height: "5rem", width: "5rem" }}
      >
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
        <div className="sk-circle-fade-dot"></div>
      </div>
    </div>,
    document.getElementById("overlay")
  );
};

export default PageLoader;
