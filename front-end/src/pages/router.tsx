import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/login";
import NotFound from "./notFound/notFound";
import AddConsulta from "./consulta/addConsulta";
import Home from "./home/home";
import ListarConsultas from "./consulta/listarConsultas";
import ListarClinicas from "./clinicas/listarClinicas";
import ListarMedicos from "./medicos/listarMedicos";
import Unauthorized from "./unauthorized/unauthorized";
import PrivateRoutes from "./utils/privateRoute";
import PermissionPrivateRoutes from "./utils/permissionPrivateRoute";
import Forbidden from "./forbidden/forbidden";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/unauthorized" element={<Unauthorized />}></Route>
        <Route path="/forbidden" element={<Forbidden />}></Route>
        <Route path="*" element={<NotFound />} />

        <Route element={<PrivateRoutes />}>
          <Route
            element={
              <PermissionPrivateRoutes
                permissionsAllowed={["rw_super", "r_dashboards"]}
              />
            }
          >
          </Route>

          {/* <Route path="/preCollect" element={<PreCollect />}></Route> */}
          {/* <Route path="/collect" element={<Collect />}></Route>
          <Route path="/collect/add" element={<AddCollect />}></Route>
          <Route path="/delivery" element={<Delivery />}></Route>
        <Route path="/reports/checkIn" element={<CheckInReport />}></Route> */}
        </Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/adicionarConsulta" element={<AddConsulta />}></Route>
        <Route path="/listarConsultas" element={<ListarConsultas />}></Route>
        <Route path="/listarClinicas" element={<ListarClinicas />}></Route>
        <Route path="/listarMedicos" element={<ListarMedicos />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
