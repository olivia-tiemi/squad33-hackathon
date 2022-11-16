import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Aula from "./pages/Aula";
import Header from "./components/Header";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={["USER", "ADM"]} />}>
        <Route path="home" element={<Header text="Trilhas Orange Evolution" />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="aula/:curso_id" element={<Header text="" />}>
          <Route path="" element={<Aula />} />
        </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={["ADM"]} />}>
        <Route path="admin" element={<Header text="Configurações" />}>
          <Route path="" element={<Admin />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
