import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorage } from "@/libs/utils";
import { setupToken } from "@/services/api";
import { useContext, useEffect } from "react";
import UserContext from "@/context/user-context";

const ProtectedRoutes = () => {
  const { storeUser } = useContext(UserContext);
  const authToken = getLocalStorage("auth-token");
  const authUser = getLocalStorage("auth-user");

  useEffect(() => {
    if (authToken && authUser) {
      storeUser(authUser);
      setupToken(authToken);
    }
  }, [authUser, authToken, storeUser]);

  const restrictedRoutes = ["/home/settings", "/home/notify", "/home/users"];

  if (
    authUser &&
    authUser.position_id != 1 &&
    restrictedRoutes.includes(location.pathname)
  ) {
    return <Navigate to="/unauthorized" replace />;
  }

  if (!authToken || !authUser) {
    window.location.href = "/";
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
