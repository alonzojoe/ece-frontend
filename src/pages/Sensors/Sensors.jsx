import Modal from "@/components/UI/Modal";
import Card from "@/components/UI/Card";
import Pagination from "@/components/UI/Pagination";
import useFetch from "@/hooks/useFetch";
import { useState, useEffect, useRef } from "react";
import echo from "@/services/sockets";
import { Notification } from "@/libs/utils.jsx";
import Badge from "@/components/UI/Badge";
import useToggle from "@/hooks/useToggle";
import Swal from "sweetalert2";
import api from "@/services/api";

const notif = new Notification();

const output = (state, payload) => {
  if (!state) return;

  switch (state) {
    case "normal":
      notif.normal(
        `Readings: Load: ${payload.load} | Deflection: ${payload.deflection} | Angle of Deflection: ${payload.angle_of_deflection}`
      );
      break;

    case "warning":
      notif.warning(
        `Readings: Load: ${payload.load} | Deflection: ${payload.deflection} | Angle of Deflection: ${payload.angle_of_deflection}`
      );
      break;

    case "critical":
      notif.critical(
        `Readings: Load: ${payload.load} | Deflection: ${payload.deflection} | Angle of Deflection: ${payload.angle_of_deflection}`
      );
      break;

    default:
      console.error("Unknown state");
      break;
  }
};

const initialState = {
  page: 1,
  building_name: "",
  load: "",
  deflection: "",
  angle_of_deflection: "",
  status: 1,
  randomizer: 0,
};

const Sensors = () => {
  const [params, setParams] = useState(initialState);
  const [payload, setPayload] = useState({
    data: null,
    isPending: false,
  });
  const buildingNameRef = useRef(null);
  const { data: sensors, loading, error } = useFetch(`/sensor`, params);
  const [modal, toggleModal] = useToggle(false);
  useEffect(() => {
    const channel = echo.channel("sensor-data");

    channel.listen(".sensor.stored", (event) => {
      console.log("New data has been stored:", event.sensorData);
      output(event.sensorData.state, event.sensorData);
      // notif.normal(`New data has been store: ${event.sensorData.load}`);
      // notif.warning(`New data has been store: ${event.sensorData.load}`);
      // notif.critical(`New data has been store: ${event.sensorData.load}`);

      setParams((prev) => ({
        ...prev,
        randomizer: Date.now(),
      }));
    });

    return () => {
      channel.stopListening(".sensor.stored");
      echo.leaveChannel("sensor-data");
    };
  }, []);

  console.log("data", sensors, error);

  const handlePageChange = (page) => {
    setParams((prev) => ({
      ...prev,
      page,
    }));
  };

  const update = (selected) => {
    console.log("selected data", selected);
    setPayload((prev) => ({ ...prev, data: selected }));
    toggleModal(true);
  };

  const handleUpdate = async () => {
    setPayload((prev) => ({ ...prev, isPending: true }));
    try {
      await api.put(`/sensor/update/${payload.data.id}`, {
        ...payload.data,
        building_name: buildingNameRef.current.value,
        user_id: 1,
      });
      Swal.fire({
        icon: "success",
        title: `Information`,
        text: "Sensor data updated successfully!",
      }).then(() => {
        setParams((prev) => ({ ...prev, randomizer: Date.now() }));
      });
      toggleModal(false);
    } catch (error) {
      console.log(`error`, error?.message);
    } finally {
      setPayload((prev) => ({ ...prev, isPending: false }));
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "question",
      title: "Are you sure to delete this record?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Record has been deleted!", "", "success");
        try {
          await api.patch(`/sensor/inactive/${id}`);
          setParams((prev) => ({ ...prev, randomizer: Date.now() }));
        } catch (error) {
          console.log("error", error?.message);
        }
      }
    });
  };

  const refresh = () => {
    setParams({
      ...initialState,
      randomizer: Date.now(),
    });
  };

  return (
    <>
      {modal && (
        <Modal
          onClose={() => toggleModal(false)}
          details={{ title: "Sensor Data" }}
        >
          <div className="p-2">
            <div className="row my-2 ">
              <div className="col-sm-12 col-md-12 col-lg-12 mb-2">
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
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4 mb-2">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Load
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
                    Deflection
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
                    Angle of Deflection
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm custom-font"
                    value={payload.data.angle_of_deflection}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div>
                  <label className="form-label fs-6 mb-2 fw-semibold">
                    Status
                  </label>
                  <Badge state={payload.data.notification.state} />
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
                      className="btn btn-primary d-flex gap-2 align-items-center"
                      onClick={handleUpdate}
                      disabled={payload.isPending}
                    >
                      <span>{payload.isPending ? "Updating" : "Update"}</span>
                      {payload.isPending && (
                        <div
                          className="spinner-border text-white"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      )}
                    </button>
                    <button
                      className="btn btn-danger"
                      // onClick={() => {
                      //   notif.custom(`data has been inserted`);
                      // }}
                      onClick={() => toggleModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <div className="card mt-3">
        <Card title="Search">
          <div className="row mt-4">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Building Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm custom-font"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">Load</label>
                <input
                  type="text"
                  className="form-control form-control-sm custom-font"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Deflection
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm custom-font"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Angle of Deflection
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm custom-font"
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div>
                <label className="form-label fs-6 mb-2 fw-semibold">
                  Status
                </label>
                <select className="form-select form-control-sm custom-font">
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="d-flex gap-2 align-items-center"
                style={{
                  marginTop: "1.7rem",
                }}
              >
                <button className="btn btn-primary">Search</button>
                <button
                  className="btn btn-danger"
                  // onClick={() => {
                  //   notif.custom(`data has been inserted`);
                  // }}
                  onClick={refresh}
                >
                  Refresh
                </button>
              </div>
            </div>
          </div>
        </Card>

        <div className="table-responsive mt-3">
          <table className="table table-bordered table-hover">
            <thead>
              <tr style={{ textTransform: "capitalize !important" }}>
                <th className="text-center text-white bg-primary fw-bold p-2 m-0">
                  ID
                </th>
                <th className="text-center text-white bg-primary fw-bold p-2 m-0">
                  Building Name
                </th>
                <th className="text-center text-white bg-primary fw-bold p-2 m-0">
                  Load
                </th>
                <th className="text-center text-white bg-primary fw-bold p-2 m-0">
                  Deflection
                </th>
                <th className="text-center text-white bg-primary fw-bold p-2 m-0">
                  Angle of Deflection
                </th>
                <th className="text-center text-white bg-primary fw-bold p-2 m-0">
                  Status
                </th>
                <th className="text-center text-white bg-primary fw-bold p-2 m-0">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan="7">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="d-flex align-items-center jusitfy-content-center">
                        <div className="sk-wave sk-primary">
                          <div className="sk-wave-rect"></div>
                          <div className="sk-wave-rect"></div>
                          <div className="sk-wave-rect"></div>
                          <div className="sk-wave-rect"></div>
                          <div className="sk-wave-rect"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}

              {error && (
                <tr>
                  <td
                    className="text-center align-middle fw-normal text-danger p-1 m-0"
                    colSpan="7"
                  >
                    Something went wrong :(
                  </td>
                </tr>
              )}

              {!loading && !error && !sensors?.data?.length && (
                <tr>
                  <td
                    className="text-center align-middle fw-normal p-1 m-0"
                    colSpan="7"
                  >
                    No records found.
                  </td>
                </tr>
              )}

              {!loading &&
                !error &&
                sensors?.data?.length > 0 &&
                sensors.data.map((s) => (
                  <tr key={s.id}>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      {s.id}
                    </td>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      {s.building_name}
                    </td>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      {s.load}
                    </td>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      {s.deflection}
                    </td>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      {s.angle_of_deflection}
                    </td>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      {s.notification && <Badge state={s.notification.state} />}
                    </td>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => update(s)}
                        >
                          Update
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(s.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {!loading && sensors?.data?.length > 0 && (
            <Pagination
              currentPage={params.page}
              totalPages={sensors.total_pages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Sensors;
