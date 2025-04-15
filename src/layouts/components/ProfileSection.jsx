import defaultImage from "../../assets/images/avatar.jpeg";
import useFetch from "@/hooks/useFetch";
import useToggle from "@/hooks/useToggle";
import UpdateUser from "@/pages/Users/components/UpdateUser";
import ChangePassword from "./ChangePassword";
import { useContext } from "react";
import UserContext from "@/context/user-context";
import { getLocalStorage, logout } from "@/libs/utils";
import api from "@/services/api";
import { ToastMessage } from "@/libs/utils";

const notify = new ToastMessage();
const ProfileSection = () => {
  const { data: positions } = useFetch("/position/all", {});
  const [updateForm, toggleUpdateForm] = useToggle(false);
  const [updatePass, toggleUpdatePass] = useToggle(false);
  const storedUser = getLocalStorage("auth-user");
  const loggedUser = {
    ...storedUser,
    position_id: storedUser.position_id.toString(),
  };

  const { user } = useContext(UserContext);

  const updateUser = () => {
    toggleUpdateForm(true);
  };

  const updatePassword = () => {
    toggleUpdatePass(true);
  };

  const refresh = () => {};

  const checkNotif = async () => {
    try {
      await api.get("/sensor/test");
    } catch (error) {
      notify.notif("error", `Websocket is not running`);
    }
    setTimeout(() => {
      location.reload();
    }, 1000);
  };

  return (
    <>
      {updateForm && (
        <UpdateUser
          positions={positions}
          onClose={toggleUpdateForm}
          onRefresh={refresh}
          selectedUser={loggedUser}
        />
      )}

      {updatePass && (
        <ChangePassword
          onClose={toggleUpdatePass}
          onRefresh={refresh}
          selectedUser={loggedUser}
        />
      )}

      <li className="nav-item navbar-dropdown dropdown-user dropdown">
        <div
          className="nav-link dropdown-toggle hide-arrow"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className="avatar avatar-online">
            <img
              src={defaultImage}
              alt="user-avatar"
              className="h-auto rounded-circle border border-secondary"
            />
          </div>
        </div>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <div className="dropdown-item cursor-pointer" onClick={updateUser}>
              <div className="d-flex">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar avatar-online">
                    <img
                      src={defaultImage}
                      alt="user-avatar"
                      className="h-auto rounded-circle border border-secondary"
                    />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <span className="fw-medium d-block">
                    {user?.name.toUpperCase()}
                  </span>
                  <small className="text-muted">{user?.position?.name}</small>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown-divider"></div>
          </li>
          <li>
            <div className="dropdown-item cursor-pointer" onClick={updateUser}>
              <i className="ti ti-user-check me-2 ti-sm"></i>
              <span className="align-middle">My Profile</span>
            </div>
          </li>
          <li>
            <div
              className="dropdown-item cursor-pointer"
              onClick={updatePassword}
            >
              <i className="ti ti-settings me-2 ti-sm"></i>
              <span className="align-middle">Settings</span>
            </div>
          </li>
          <li>
            <div className="dropdown-item cursor-pointer" onClick={checkNotif}>
              <i className="ti ti-bell me-2 ti-sm"></i>
              <span className="align-middle">Check Notification</span>
            </div>
          </li>

          <li>
            <div className="dropdown-divider"></div>
          </li>

          <li>
            <div className="dropdown-item cursor-pointer" onClick={logout}>
              <i className="ti ti-logout me-2 ti-sm"></i>
              <span className="align-middle">Log Out</span>
            </div>
          </li>
        </ul>
      </li>
    </>
  );
};

export default ProfileSection;
