import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Borrowers from "@/pages/Borrowers/Borrowers";
import ProtectedRoutes from "@/middleware/ProtectedRoutes";
import Auth from "@/pages/Auth/Auth";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Auth />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="home" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="borrowers" element={<Borrowers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
