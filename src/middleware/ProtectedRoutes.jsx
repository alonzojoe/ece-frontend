import { Outlet } from "react-router-dom";
import { getLocalStorage } from "@/libs/utils";
import { setupToken } from "@/services/api";
import { useContext } from "react";
import UserContext from "@/context/user-context";

const ProtectedRoutes = () => {
  const { storeUser } = useContext(UserContext);

  const authToken = getLocalStorage("auth-token");
  const authUser = getLocalStorage("auth-user");
  console.log("authToken", authToken);
  console.log("authUser", authUser);
  if (!authToken) {
    window.location.href = "http://localhost:5173";
    return;
  }
  storeUser(authUser);
  setupToken(authToken);
  return <Outlet />;
};

export default ProtectedRoutes;
