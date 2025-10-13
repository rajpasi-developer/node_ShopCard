import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import { PiEyeBold } from "react-icons/pi";
import { PiEyeClosedBold } from "react-icons/pi";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { adminDataContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { serverUrl } = useContext(authDataContext);
  let { adminData, getAdmin } = useContext(adminDataContext);
  let navigate = useNavigate();

  const AdminLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/adminlogin",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(result.data);
      getAdmin();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div className="w-[100%] h-[80px] flex itmes-center justify-start px-[30px] gap-[10px] cursor-pointer">
        <img src={Logo} className="w-[40px] h-[40px]" alt="" />
        <h1 className="text-[22px] font-sans">ShopCart</h1>
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-semibold">Registratiion Page</span>
        <span className="text-[16px]">
          Welcome to OneCart, Apply to Admin Login
        </span>
      </div>

      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex  items-center justify-center ">
        <form
          action=""
          onSubmit={AdminLogin}
          className="w-[90%] h-[90%] flex flex-col items-center  gap-[20px]"
        >
          <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative">
            <input
              type="text"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="w-full h-[50px] relative flex items-center">
              <input
                type={show ? "text" : "password"}
                className="w-full h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold pr-[40px]"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />

              {show ? (
                <PiEyeBold
                  className="w-[20px] h-[20px] cursor-pointer absolute right-[15px] text-white"
                  onClick={() => setShow((prev) => !prev)}
                />
              ) : (
                <PiEyeClosedBold
                  className="w-[20px] h-[20px] cursor-pointer absolute right-[15px] text-white"
                  onClick={() => setShow((prev) => !prev)}
                />
              )}
            </div>

            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
