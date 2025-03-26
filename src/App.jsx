import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Sensors from "@/pages/Sensors/Sensors";
import ProtectedRoutes from "@/middleware/ProtectedRoutes";
import Auth from "@/pages/Auth/Auth";
import Borrowers from "./pages/Borrowers/Borrowers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Auth />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="home" element={<RootLayout />}>
            <Route index element={<Sensors />} />
            <Route path="borrowers" element={<Borrowers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
