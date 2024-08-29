import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useUser from "../../../Security/useUser";
import { toast } from "react-toastify";
import bg from "@/assets/asset/bg.jpeg";

const AdminLogin = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [, , refetch] = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    const mobile = e.target.mobile.value;
    const password = e.target.password.value;
    const info = {
      mobile,
      password
    }
    try {
      const res = await axiosPublic.post(`/api/login`, info);
      if (res.data) {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.access_token);
        navigate("/admin");
        refetch();
        e.target.reset()
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="h-full w-full bg-blue-800/30 absolute"></div>
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center w-full px-2">
        <div className="w-full">
          <div className="w-full card shadow-xl relative bg-blue-700/30 backdrop-blur-md">
            <div className="flex justify-center absolute lg:-top-11">
              <img src={""} className="w-1/4 lg:w-1/3 border-white" alt="" />
            </div>

            <h1 className="text-2xl text-center pt-14 lg:pt-[70px] pb-2 rounded-t-xl bg-gray-200/20 text-gray-800 lg:text-5xl font-semibold invitationTextFont">
              Welcome to Happy Budget
            </h1>
            <form
              onSubmit={handleLogin}
              className="px-2 lg:px-8 py-4 lg:py-6 text-white"
            >
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Mobile *</span>
                </label>
                <input
                  type="number"
                  placeholder="Mobile"
                  name="mobile"
                  className="border border-gray-300 h-12 bg-gray-100/30 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Password *</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="border border-gray-300 h-12 bg-gray-100/30 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="w-full mt-6 flex flex-col lg:flex-row gap-2 items-center">
                <button type="submit" className="button_primary w-full">
                  Login
                </button>
              </div>
              <div id="reader"></div>
              <p className="text-gray-700">
                If you are not an account please
                <Link
                  className="text-gray-700 font-medium ml-2"
                  to="/admin/register"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
