import { Outlet } from "react-router-dom";
import { getLocalStorage } from "@/libs/utils";
import { setupToken } from "@/services/api";

const ProtectedRoutes = () => {

  const authToken = getLocalStorage("auth-token");
  console.log("authToken", authToken);
  if (!authToken) {
    window.location.href = "http://localhost:5173"
    return;
  }
  setupToken(authToken);
  return <Outlet />;
};

export default ProtectedRoutes;
