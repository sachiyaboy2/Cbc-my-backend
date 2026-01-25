import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function login() {
    try{
      const response = await axios.post(
      import.meta.env.VITE_API_URL + "/api/users/login",
      { email : email, password : password }
    );
    
    localStorage.setItem("token", response.data.token);

    const user = response.data.user;
    if (user.role == "admin"){
      navigate("/admin")
    } else {
      navigate("/")
    }

    }catch(e){
      console.error("Login Fail", e)
    }
  }

  return (
    <div className="w-full h-screen bg-[url('/BG.jpg')] bg-cover bg-center flex">

      {/* LEFT BRAND */}
      <div className="
        w-1/2 h-full flex flex-col justify-center px-24
        bg-gradient-to-br from-pink-600/45 to-rose-400/20
        backdrop-blur-sm text-white
      ">
        <img src="/logo.png" className="w-28 mb-10 drop-shadow-xl" />

        <h1 className="text-6xl font-extrabold mb-6 leading-tight">
          Glow <br />
          <span className="text-pink-200">Beauty</span>
        </h1>

        <p className="text-lg text-white/85 max-w-md">
          A modern beauty platform designed to manage products,
          customers and orders with elegance.
        </p>

        <div className="mt-14 h-[3px] w-28 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full"></div>
      </div>

      {/* RIGHT LOGIN */}
      <div className="w-1/2 h-full flex items-center justify-center">

        {/* CARD */}
        <div className="
          w-[480px] h-[600px]
          bg-white/30 backdrop-blur-2xl
          border border-white/40
          rounded-[3.2rem]
          shadow-[0_35px_80px_rgba(0,0,0,0.35)]
          px-12 py-14
          flex flex-col
        ">

          {/* LOGO */}
          <a href="#"><img
            src="/logo.png"
            className="w-15 mx-auto mb-6 drop-shadow-lg to-[-10px]"
          /></a>

          <h1 className="text-4xl font-bold text-pink-900 text-center">
            Welcome Back
          </h1>
          <p className="text-center text-pink-800/80 mt-2 mb-12">
            Login to your account
          </p>

          {/* EMAIL */}
          <div className="mb-8">
            <label className="text-sm font-medium text-pink-900 block mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full px-6 py-4 rounded-2xl
                bg-white/80 text-pink-900
                placeholder-pink-500
                outline-none
                focus:ring-2 focus:ring-pink-400
                transition
              "
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-12">
            <label className="text-sm font-medium text-pink-900 block mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full px-6 py-4 rounded-2xl
                bg-white/80 text-pink-900
                placeholder-pink-500
                outline-none
                focus:ring-2 focus:ring-pink-400
                transition
              "
            />
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={login}
            className="
              w-full py-4 rounded-full
              bg-gradient-to-r from-pink-500 via-rose-500 to-pink-400
              text-white text-lg font-semibold
              shadow-[0_15px_40px_rgba(236,72,153,0.55)]
              hover:scale-[1.035]
              hover:shadow-[0_20px_55px_rgba(236,72,153,0.75)]
              active:scale-[0.98]
              transition-all duration-300
            "
          >
            Login
          </button>

          {/* FOOTER */}
          <p className="text-center text-sm text-pink-900 mt-10">
            Don’t have an account?{" "}
            <span className="font-semibold cursor-pointer hover:underline">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
