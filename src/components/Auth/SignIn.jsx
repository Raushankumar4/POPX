import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(true);

    setTimeout(() => {
      navigate("/profile");
    }, 100);
  };

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-[#FAFAFA] px-6">
      <div className="w-[300px] min-h-[550px] border border-gray-300 p-6 rounded bg-[#F7F8F9]">
        <h1 className="text-xl font-bold mb-2 text-[#1D2226]">
          Signin to your <br /> PopX account
        </h1>
        <p className="text-sm font-medium text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form className="space-y-5" onSubmit={handleClick}>
          {/* Email Address */}
          <div className="form-group relative">
            <label className="signup-label">Email Address</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter email address"
            
            />
          </div>

          {/* Password */}
          <div className="form-group relative">
            <label className="signup-label">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter password"
           
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleClick}
            className={`w-full py-2.5 rounded-md text-sm font-semibold ${
              clicked ? "bg-[#6C25FF] text-white" : "bg-gray-400 text-gray-700"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
