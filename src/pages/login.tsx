import Loginform from "../components/forms/login.form";

const LoginForm = () => {
  return (
    <main className="h-full w-full flex justify-center items-center tracking-wider">
      <div className="border border-emerald-300 p-6 min-w-[350px] min-h-[400px] rounded-md shadow-gray-300">
        <h1 className="text-2xl font-bold text-emerald-500 text-center">
          Login
        </h1> 

   {/* LoginForm */}
    <Loginform/>
        
        <div>
          <div className="mt-4">
            <p className="text-[14px] text-center">
              {" "}
              Don&apos;t have an account?{" "}
              <span className="text-emerald-500"> Signup</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
