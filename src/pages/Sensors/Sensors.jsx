import { useState, useEffect, useRef, useContext } from "react";
import Pagination from "@/components/UI/Pagination";
import Badge from "@/components/UI/Badge";
import SearchData from "./components/SearchData";
import ViewData from "./components/ViewData";
import useFetch from "@/hooks/useFetch";
import useToggle from "@/hooks/useToggle";
import echo from "@/services/sockets";
import {
  Notification,
  ToastMessage,
  ConfirmDialog,
  formatDateTime,
} from "@/libs/utils.jsx";
import api from "@/services/api";
import UserContext from "@/context/user-context";
import moment from "moment";
import NotifContext from "@/context/notification-context";

const notif = new Notification();
const notify = new ToastMessage();
const dialog = new ConfirmDialog();

const output = (state, payload) => {
  if (!state) return;

  switch (state) {
    case "normal":
      notif.normal(
        `Readings: Load: ${payload.load} N | Deflection: ${payload.deflection} mm | Angle of Deflection: ${payload.angle_of_deflection} °`
      );
      break;

    case "warning":
      notif.warning(
        `Readings: Load: ${payload.load} N | Deflection: ${payload.deflection} mm | Angle of Deflection: ${payload.angle_of_deflection} °`
      );
      break;

    case "critical":
      notif.critical(
        `Readings: Load: ${payload.load} N | Deflection: ${payload.deflection} mm | Angle of Deflection: ${payload.angle_of_deflection} °`
      );
      break;

    case "check":
      notif.normal(`Websocket is running!`);
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
  const { user } = useContext(UserContext);
  const [payload, setPayload] = useState({
    data: null,
    isPending: false,
  });
  const buildingNameRef = useRef(null);
  const { data: sensors, loading, error } = useFetch(`/sensor`, params);
  const [modal, toggleModal] = useToggle(false);
  const { showNotif: displayNotif } = useContext(NotifContext);
  useEffect(() => {
    const channel = echo.channel("sensor-data");

    channel.listen(".sensor.stored", (event) => {
      if (displayNotif) {
        console.log("New data has been stored:", event.sensorData.state);
        output(event.sensorData.state, event.sensorData);
        // notif.normal(`New data has been store: ${event.sensorData.load}`);
        // notif.warning(`New data has been store: ${event.sensorData.load}`);
        // notif.critical(`New data has been store: ${event.sensorData.load}`);

        setParams((prev) => ({
          ...prev,
          randomizer: Date.now(),
        }));
      }
    });

    return () => {
      channel.stopListening(".sensor.stored");
      echo.leaveChannel("sensor-data");
    };
  }, [displayNotif]);

  console.log("data", sensors, error);

  const handlePageChange = (page) => {
    setParams((prev) => ({
      ...prev,
      page,
    }));
  };

  const view = (selected) => {
    console.log("selected data", selected);
    const formatted = {
      ...selected,
      created_at: moment(selected.created_at).format("YYYY-MM-DDTHH:mm"), // Ensure it's formatted correctly
    };
    console.log("formatted", formatted);
    setPayload((prev) => ({ ...prev, data: formatted }));
    toggleModal(true);
  };

  const handleUpdate = async () => {
    setPayload((prev) => ({ ...prev, isPending: true }));
    try {
      await api.put(`/sensor/update/${payload.data.id}`, {
        ...payload.data,
        building_name: buildingNameRef.current.value,
        user_id: user.id,
      });
      notify.notif("success", "Sensor data updated successfully!");
      setParams((prev) => ({ ...prev, randomizer: Date.now() }));
      toggleModal(false);
    } catch (error) {
      console.log(`error`, error?.message);
    } finally {
      setPayload((prev) => ({ ...prev, isPending: false }));
    }
  };

  const handleDelete = (id) => {
    dialog
      .confirm(
        "question",
        "Confirmation",
        "Are you sure to delete this record?"
      )
      .then(async (result) => {
        if (result.isConfirmed) {
          notify.notif("success", "Record has been deleted!");
          try {
            await api.patch(`/sensor/inactive/${id}`);
            refresh();
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

  const handleSearch = (form) => {
    const { building_name, load, deflection, angle_of_deflection, status } =
      form;
    setParams((prev) => ({
      ...prev,
      page: 1,
      building_name: building_name,
      load: load,
      deflection: deflection,
      angle_of_deflection: angle_of_deflection,
      status: status,
    }));
  };

  return (
    <>
      {modal && <ViewData payload={payload} onToggle={toggleModal} />}
      <div className="card mt-3">
        <SearchData onSearch={handleSearch} onRefresh={refresh} />
        <div className="table-responsive mt-3">
          <table className="table table-bordered table-hover">
            <thead className="bg-primary">
              <tr style={{ textTransform: "capitalize" }}>
                <th className="text-center text-white p-1 py-2 m-0">ID</th>
                {/* <th className="text-center text-white p-1 py-2 m-0">
                  Building Name
                </th> */}
                <th className="text-center text-white p-1 py-2 m-0">
                  Load (N)
                </th>
                <th className="text-center text-white p-1 py-2 m-0">
                  Deflection{" "}
                  <span style={{ textTransform: "lowercase" }}>(mm)</span>
                </th>
                <th className="text-center text-white p-1 py-2 m-0">
                  Angle of Deflection (°)
                </th>
                <th className="text-center text-white p-1 py-2 m-0">Status</th>
                <th className="text-center text-white p-1 py-2 m-0">
                  Created At
                </th>
                <th className="text-center text-white p-1 py-2 m-0">Options</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td
                    className="text-center align-middle fw-normal p-1 m-0"
                    colSpan="7"
                  >
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
                    className="text-center align-middle text-danger fw-normal p-1 m-0"
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
                    {/* <td className="text-center align-middle fw-normal p-1 m-0">
                      {s.building_name}
                    </td> */}
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      {s.load} N
                    </td>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      {s.deflection} mm
                    </td>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      {s.angle_of_deflection} °
                    </td>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      {s.notification && <Badge state={s.notification.state} />}
                    </td>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      {formatDateTime(s.created_at)}
                    </td>
                    <td className="text-center align-middle fw-normal p-1 m-0">
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => view(s)}
                        >
                          View
                        </button>
                        {s.status == 1 && (
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(s.id)}
                          >
                            Delete
                          </button>
                        )}
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
