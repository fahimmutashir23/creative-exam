import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "/components/ui/select";
import { useState } from "react";
import bg from "@/assets/asset/bg.jpeg";

const AdminRegistration = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [typeName, setTypeName] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const confirmPass = e.target.re_password.value;
    const password = e.target.password.value;
    const nom = parseInt(e.target.nom.value);

    if (phone.length !== 11) {
      return toast.error("phone number must be 11");
    } else if (password !== confirmPass) {
      return toast.error("password are not matched");
    } else {
      try {
        const info = {
          name: firstName.concat(lastName),
          email,
          phone,
          password,
          memberType: typeName,
          nom,
        };

        const res = await axiosPublic.post(`/api/create-user`, info);
        if (res.data.status_code === 403) {
          toast.error(res.data.message);
        }
        if (res.data.success) {
          // refetch();
          toast.success(res.data.message);
          navigate("/login");
        }
      } catch (err) {
        toast.error(err.response.data.message);
      }
    }
  };
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="h-full w-full bg-blue-700/30 absolute"></div>
      <div className="min-h-screen max-w-3xl mx-auto flex justify-center items-center w-full px-2">
        <div className="w-full">
          <div className="w-full card shadow-xl relative bg-blue-600/30 backdrop-blur-md">
          <div className="flex justify-center absolute lg:-top-11">
              <img
                src={''}
                className="w-1/4 lg:w-1/3 border-white"
                alt=""
              />
            </div>

            <h1 className="text-2xl text-center pt-14 lg:pt-[110px] pb-2 rounded-t-xl bg-gray-200/20 text-gray-800 lg:text-5xl font-semibold invitationTextFont">
              Welcome to Happy Budget
            </h1>
            <form onSubmit={handleRegister} className="card-body text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
                <div className="form-control">
                  <label className="">
                    <span className="font-semibold">First Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="border border-gray-300 h-12 bg-gray-100/30 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="">
                    <span className="font-semibold">Last Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    className="border border-gray-300 h-12 bg-gray-100/30 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="">
                    <span className="font-semibold">Phone *</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    className="border border-gray-300 h-12 bg-gray-100/30 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="">
                    <span className="font-semibold">Email *</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="border border-gray-300 h-12 bg-gray-100/30 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="">
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
                <div className="form-control">
                  <label className="">
                    <span className="font-semibold">Confirm Password *</span>
                  </label>
                  <input
                    type="password"
                    name="re_password"
                    placeholder="password"
                    className="border border-gray-300 h-12 bg-gray-100/30 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="">
                    <span className="font-semibold">Member Type *</span>
                  </label>
                  <Select onValueChange={(value) => setTypeName(value)}>
                    <SelectTrigger className="border border-gray-300 h-12 bg-gray-100/30 focus:ring-0 px-4 focus:border w-full focus:outline-none rounded-sm">
                      <SelectValue placeholder="Select a Type" />
                    </SelectTrigger>
                    <SelectContent className="rounded-sm">
                      <SelectItem value="Student">Student</SelectItem>
                      <SelectItem value="Small Family">Small Family</SelectItem>
                      <SelectItem value="Medium Family">
                        Medium Family
                      </SelectItem>
                      <SelectItem value="Large Family">Large Family</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="form-control">
                  <label className="">
                    <span className="font-semibold">Number of Member *</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Number of Member"
                    name="nom"
                    className="border border-gray-300 h-12 bg-gray-100/30 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div className="w-full mt-6 flex flex-col lg:flex-row gap-2 items-center">
                <button type="submit" className="button_primary w-full">
                  Register
                </button>
              </div>
              <div id="reader"></div>
              <p className="text-gray-700">
                Already have an account? Please
                <Link className="text-gray-700 font-medium ml-2" to="/admin/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegistration;
