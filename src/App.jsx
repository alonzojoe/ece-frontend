import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Sensors from "@/pages/Sensors/Sensors";
import ProtectedRoutes from "@/middleware/ProtectedRoutes";
import Auth from "@/pages/Auth/Auth";
import Emails from "@/pages/Emails/Emails";
import Settings from "@/pages/Settings/Settings";
import Users from "@/pages/Users/Users";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Auth />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<RootLayout />}>
              <Route index element={<Sensors />} />
              <Route path="notify" element={<Emails />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
