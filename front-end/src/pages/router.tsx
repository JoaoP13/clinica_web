import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login/login";
import NotFound from "./notFound/notFound";
// import UserForm from "./user/userForm";
// import Home from "./home/home";
// import Collect from "./newCollect/collect";
// import Delivery from "./delivery/delivery";
// import CheckInReport from "./reports/checkInReport";
// import AddCollect from "./newCollect/add/addCollect";
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

          {/* <Route path="/home" element={<Home />}></Route> */}
          {/* <Route path="/preCollect" element={<PreCollect />}></Route> */}
          {/* <Route path="/collect" element={<Collect />}></Route>
          <Route path="/collect/add" element={<AddCollect />}></Route>
          <Route path="/delivery" element={<Delivery />}></Route>
          <Route path="/reports/checkIn" element={<CheckInReport />}></Route> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
