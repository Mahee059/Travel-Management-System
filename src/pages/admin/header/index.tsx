import { BiLogOutCircle } from "react-icons/bi";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../../../api/auth.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AdminHeader = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: logout,
    onSuccess: (response) => {
      toast.success(response.message ?? "Logged out");
      navigate("/login");
      setUser(null);
    },
    onError: (error) => {
      toast.error(error.message ?? "Logged out");
    },
  });

  const logoutUser = () => {
    mutate();
  };
  return (
    <nav className="h-full flex-1 flex items-center justify-between">
      {/*  */}
      <div>
        <p className="text-emerald-700 font-semibold italic text-lg">
          Welcome Back,{" "}
          <span className="capitalize">
            {(user?.role ?? "ADMIN").toLowerCase()}
          </span>
        </p>
      </div>

      {/* auth buttons */}

      <div className="mr-5">
        <p className="text-lg font-bold text-emerald-700">
          {user?.firstName} {user?.lastName}
        </p>
        <div className="flex items-center gap-2 text-red-500 font-bold cursor-pointer">
          <BiLogOutCircle size={26} />
          <p onClick={logoutUser} className="text-lg">
            {isPending ? "Logging out" : "Logout"}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;
