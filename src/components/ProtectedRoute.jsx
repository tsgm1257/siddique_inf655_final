import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center p-10">Loading...</div>;

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
