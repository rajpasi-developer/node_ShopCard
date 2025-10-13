import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Google from "../assets/google-icon.png";
import { useNavigate } from "react-router-dom";
import { PiEyeBold } from "react-icons/pi";
import { PiEyeClosedBold } from "react-icons/pi";
import { useContext } from "react";
import { authDataContext } from "../context/authContext";
import { auth, provider } from "../../utils/Firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
import { UserDataContext } from "../context/userContext";
const Login = () => {
  const [show, setShow] = useState(false);

  let { serverUrl } = useContext(authDataContext);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { getCurrentUser } = useContext(UserDataContext);
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      getCurrentUser();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const googlelogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;
      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        { name, email },
        { withCredentials: true }
      );
      getCurrentUser();
      navigate("/");
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex itmes-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Logo} className="w-[40px] h-[40px]" alt="" />
        <h1 className="text-[22px] font-sans">ShopCart</h1>
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-semibold">Registratiion Page</span>
        <span className="text-[16px]">
          Welcome to OneCart, Place your order
        </span>
      </div>

      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex  items-center justify-center ">
        <form
          action=""
          onSubmit={handleLogin}
          className="w-[90%] h-[90%] flex flex-col items-center  gap-[20px]"
        >
          <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
            <img
              src={Google}
              alt=""
              className="w-[20px]"
              onClick={googlelogin}
            />{" "}
            Login account with Google
          </div>
          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969632]"></div>
            OR
            <div className="w-[40%] h-[1px] bg-[#96969632]"></div>
          </div>
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
                <PiEyeClosedBold
                  className="w-[20px] h-[20px] cursor-pointer absolute right-[15px] text-white"
                  onClick={() => setShow((prev) => !prev)}
                />
              ) : (
                <PiEyeBold
                  className="w-[20px] h-[20px] cursor-pointer absolute right-[15px] text-white"
                  onClick={() => setShow((prev) => !prev)}
                />
              )}
            </div>

            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold">
              Login
            </button>
            <p className="flex gap-[10px] ">
              You haven't no account?
              <span
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Create New Account
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
