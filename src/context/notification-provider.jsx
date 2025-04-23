import { Children, useState } from "react";
import NotifContext from "./notification-context";

const NotificationProvider = ({ children }) => {
  const [showNotif, toggleShowNotif] = useState(true);

  const toggleNotif = () => {
    toggleShowNotif((prev) => !prev);
  };

  const notifValue = {
    showNotif,
    toggleNotif,
  };

  return (
    <NotifContext.Provider value={notifValue}>{children}</NotifContext.Provider>
  );
};

export default NotificationProvider;
