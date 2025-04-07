import UserContext from "./user-context";
import { useState } from "react";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const storeUser = (value) => {
    if (JSON.stringify(user) !== JSON.stringify(value)) {
      setUser(value);
    }
  };

  const clearUser = () => {
    setUser(null);
  };

  const userValue = {
    user,
    storeUser,
    clearUser,
  };

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
