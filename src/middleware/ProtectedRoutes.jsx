import { Outlet } from "react-router-dom";
import { getLocalStorage } from "@/libs/utils";
import { setupToken } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import UserContext from "@/context/user-context";
import PageLoader from "@/components/UI/PageLoader";

const ProtectedRoutes = () => {
  const { storeUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const authToken = getLocalStorage("auth-token");
  const authUser = getLocalStorage("auth-user");

  useEffect(() => {
    // setIsLoading(true);
    if (authToken && authUser) {
      storeUser(authUser);
      setupToken(authToken);
    }
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 500);
  }, [authUser, authToken, storeUser]);

  if (!authToken || !authUser) {
    window.location.href = "http://localhost:5173";
  }

  return (
    <>
      {/* {isLoading && <PageLoader />} */}
      <Outlet />
    </>
  );
};

export default ProtectedRoutes;
