import RegisterForm from "../components/forms/register.form";
import {Link}  from "react-router"

const Signup = () => {
  return (
    <main className="min-h-full w-full flex justify-center items-center tracking-wider">
      <div className="border border-emerald-300  p-8 min- w-[min(500px, 100%)]  min-h-[400px] rounded-md shadow-sm shadow-gray-300">
        <h1 className="text-2xl font-bold text-emerald-500 text-center">
          Register
        </h1>

        {/* login form */}
        <RegisterForm/>

        {/* link to sign up page */}
        <div className="mt-4">
          <p className="text-[14px] text-center"> 
              <Link to={'/Login'}>
            Already have an account ?{" "}
            <span className="text-emerald-500">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;