import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/authentication/useAuthorize";
import Loader from "./Loader";
import { useEffect } from "react";

function ProtectedRoutes({ children }) {
  const { isAuthenticated, isAuthorized, isLoading } = useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoutes;
