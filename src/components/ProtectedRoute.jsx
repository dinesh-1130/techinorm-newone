import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const enteredFromZoom = localStorage.getItem("enteredFromZoom");

  if (enteredFromZoom !== "true") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
