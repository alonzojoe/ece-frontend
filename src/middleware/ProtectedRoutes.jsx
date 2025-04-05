import { Outlet } from "react-router-dom";
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

  if (!authToken || !authUser) {
    window.location.href = "http://localhost:5173";
  }

  return <Outlet />;
};

export default ProtectedRoutes;
