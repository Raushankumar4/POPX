import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-[#FAFAFA]">
      <div className="w-[300px] h-[550px] rounded bg-[#F7F8F9] border border-gray-300 p-6">
        <div className="flex flex-col justify-end h-full">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-[#1D2226] mb-2">
              Welcome to PopX
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>

          <div className="space-y-3">
            <button
              className="w-full bg-[#6C25FF] hover:bg-[#6823f1] text-white py-2 px-4 rounded-md text-sm font-semibold"
              onClick={() => navigate("/signUp")}
            >
              Create Account
            </button>
            <button
              className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 py-2 px-4 rounded-md text-sm font-semibold"
              onClick={() => navigate("/signIn")}
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
