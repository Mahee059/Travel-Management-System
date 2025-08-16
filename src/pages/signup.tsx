import { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-emerald-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm border-t-4 border-emerald-600">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          SignUp Form
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full outline-none text-gray-700"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full outline-none text-gray-700"
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full outline-none text-gray-700"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Retype Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full outline-none text-gray-700"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg shadow-md transition duration-200"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

            