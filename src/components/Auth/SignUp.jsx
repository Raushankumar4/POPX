import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-[#FAFAFA] px-6">
      <div className="w-[300px] min-h-[550px] border border-gray-300 p-6 rounded bg-[#F7F8F9]">
        <h1 className="text-2xl font-bold mb-6 text-[#1D2226]">
          Create your <br /> PopX account
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="form-group relative">
            <label className="signup-label">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="signup-input"
              placeholder="Marry Doe"
            />
          </div>

          {/* Phone Number */}
          <div className="form-group relative">
            <label className="signup-label">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="signup-input"
              placeholder="Marry Doe"
            />
          </div>

          <div className="form-group relative">
            <label className="signup-label">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="signup-input"
              placeholder="Marry Doe"
            />
          </div>

          <div className="form-group relative">
            <label className="signup-label">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="signup-input"
              placeholder="Marry Doe"
            />
          </div>

          <div className="form-group relative">
            <label className="signup-label">Company name</label>
            <input
              type="text"
              className="signup-input"
              placeholder="Marry Doe"
            />
          </div>

          <div className="gap-20 mb-28">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="isAgency" defaultChecked />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="isAgency" />
                <span>No</span>
              </label>
            </div>
          </div>

          <button
            className="w-full bg-[#6C25FF] hover:bg-[#6823f1] text-white py-2.5 px-4 rounded-md text-sm font-semibold"
            type="submit"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
