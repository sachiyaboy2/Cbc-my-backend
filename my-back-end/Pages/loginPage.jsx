import axios from "axios";
import { useState } from "react";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function login(){
        const response = await axios.post("http://localhost:5000/users/login", {
            email : email,
            password : password
        });

        console.log(response.data)
    };





  return (
    <div className="w-full h-screen bg-[url('/BG.jpg')] bg-cover bg-center flex">
      
      {/* LEFT COLOR PANEL */}
      <div className="w-[50%] h-full"></div>

      {/* RIGHT LOGIN SECTION */}
      <div className="w-[50%] h-full flex justify-center items-center">
        
        {/* GLASS CARD */}
        <div className="w-[500px] h-[520px] 
          bg-white/30 backdrop-blur-sm 
          shadow-2xl shadow-black/40 
          rounded-4xl p-10 flex flex-col justify-center">

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-pink-900 text-center mb-2">
            Welcome Back
          </h1>
          <p className="text-center text-pink-800/80 mb-8">
            Login to your account
          </p>

          {/* EMAIL */}
          <div className="mb-5">
            <input
              onChange={
                (e)=>{
                    setEmail(e.target.value);
                }
              }
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-xl 
              bg-white/70 placeholder-pink-700 
              outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <input
              onChange={
                (e)=>{
                    setPassword(e.target.value);
                }
              }
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl 
              bg-white/70 placeholder-pink-700 
              outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* BUTTON */}
          <button
            className="w-full py-3 rounded-full 
            bg-gradient-to-r from-pink-500 to-rose-400 
            text-white font-semibold text-lg
            hover:scale-[1.02] transition" 
            onClick={login}>
            Login
          </button>

          {/* EXTRA */}
          <p className="text-center text-sm text-pink-900 mt-6">
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
