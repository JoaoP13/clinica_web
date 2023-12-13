import { Outlet, Navigate } from "react-router-dom";

const PermissionPrivateRoutes = (params: any) => {
  const { permissionsAllowed } = params;

  let user = JSON.parse(localStorage.getItem("user") || "{}");

  const hasPermission = user.permissions.some((p: any) =>
    permissionsAllowed.includes(p)
  );

  return hasPermission ? <Outlet /> : <Navigate to="/forbidden" />;
};

export default PermissionPrivateRoutes;
