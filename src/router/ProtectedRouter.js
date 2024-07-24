import { useContext } from "react";

import { Outlet, Navigate } from "react-router-dom";

import { AuthContext } from "../utils/AuthContext";

const ProtectedRouter = () => {
  const { token } = useContext(AuthContext);
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouter;
