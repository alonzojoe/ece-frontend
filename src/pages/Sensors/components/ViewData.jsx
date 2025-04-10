import Modal from "@/components/UI/Modal";
import Badge from "@/components/UI/Badge";

const ViewData = ({ payload, onToggle }) => {
  return (
    <Modal onClose={() => onToggle(false)} details={{ title: "Sensor Data" }}>
      <div className="p-2">
        <div className="row my-2 ">
          {/* <div className="col-sm-12 col-md-12 col-lg-12 mb-2">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Building Name
                  </label>
                  <input
                    ref={buildingNameRef}
                    type="text"
                    className="form-control form-control-sm custom-font"
                    defaultValue={payload.data.building_name}
                  />
                </div>
              </div> */}
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Load (N)
              </label>
              <input
                type="text"
                className="form-control form-control-sm custom-font"
                value={payload.data.load}
                disabled={true}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Deflection (mm)
              </label>
              <input
                type="text"
                className="form-control form-control-sm custom-font"
                value={payload.data.deflection}
                disabled={true}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Angle of Deflection (°)
              </label>
              <input
                type="text"
                className="form-control form-control-sm custom-font"
                value={payload.data.angle_of_deflection}
                disabled={true}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">Status</label>
              <Badge state={payload.data.notification.state} />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
            <div>
              <label className="form-label fs-6 mb-2 fw-semibold">
                Created At
              </label>
              <input
                type="datetime-local"
                className="form-control form-control-sm custom-font"
                value={payload.data.created_at}
                disabled={true}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div>
              <div
                className="d-flex gap-2 align-items-center"
                style={{
                  marginTop: "1.7rem",
                }}
              >
                <button
                  className="btn btn-danger"
                  onClick={() => onToggle(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewData;
