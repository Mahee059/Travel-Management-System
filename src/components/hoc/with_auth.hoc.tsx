/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from "react";
import type { Role } from "../../interface/enum.types";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import toast from "react-hot-toast";

function withAuth(Component: ComponentType<any>, roles?: Role[]) {
  return function ProtectedComponent(props: any) {
    const { isLoading, user } = useAuth();
    const location = useLocation();
    console.log(isLoading, user);

    if (isLoading) {
      return (
        <div className="absolute inset-0 bg-black/50 z-40 flex justify-center items-center">
          <p className="text-xl fornt-bold text-emerald-700">Loading</p>
        </div>
      );
    }

    if (!isLoading && !user) {
      toast.error("Unauthorized. Login first.");
      return <Navigate to={"/login"} state={{ from: location.pathname }} />;
    }

    if (user && roles && roles.length > 0 && !roles.includes(user?.role)) {
      toast.error("Unauthorized. You can not access this resource.");
      return <Navigate to={"/login"} />;
    }

    return <Component {...props} />;
  };
}

export default withAuth;
