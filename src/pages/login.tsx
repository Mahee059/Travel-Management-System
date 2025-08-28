import { Link } from "react-router";
import LoginForm from "../components/forms/login.form";

const Login = () => {
  return (
    <main className="min-h-full w-full flex justify-center items-center tracking-wider px-3">
      <div className="border border-emerald-300 p-4  md:p-8 w-[min(450px,100%)] min-h-[400px] rounded-md shadow-sm shadow-gray-300">
        <h1 className="text-2xl font-bold text-emerald-500 text-center">
          Login
        </h1>

        {/* login form */}
        <LoginForm />

        {/* link to sign up page */}
        <div className="mt-4">
          <p className="text-[14px] text-center">
            Don&apos;t have an account ?{" "}
            <Link to={"/sign-up"}>
              <span className="text-emerald-500">Sign Up</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
