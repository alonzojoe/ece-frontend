const Modal = ({ details, client, children }) => {
  return (
    <div className="cst-modal2">
      <div className="cst-modal-body2 bg-white rounded position-relative">
        <span
          className="position-absolute cst-close"
          style={{
            fontSize: "20px",
            top: "-7px",
            right: "9.5px",
            zIndex: "1000",
            fontWeight: "bold",
          }}
        >
          <i
            className="fa fa-times fw-bolder"
            style={{ fontSize: "600" }}
            aria-hidden="true"
          ></i>
        </span>
        <div className="position-relative border border-primary rounded p-2 m-2 mt-4">
          <div
            className="position-absolute bg-primary text-white px-2 rounded"
            style={{
              top: "-13px",
              left: "5px",
            }}
          >
            {details.title}
          </div>
          {client}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
